import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { allDistricts, getUpazilasByDistrict, bloodGroups } from '../utils/geoData';
import axios from 'axios';
import { FaSearch, FaUser, FaMapMarkerAlt, FaTint } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SearchDonors = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [donors, setDonors] = useState([]);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const selectedDistrict = watch('district');
  const upazilas = selectedDistrict ? getUpazilasByDistrict(selectedDistrict) : [];

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/search/donors`,
        { params: data }
      );
      setDonors(response.data);
      setSearched(true);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Search Blood Donors
          </h1>
          <p className="text-lg text-gray-600">
            Find donors by blood group and location
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Blood Group */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Blood Group</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  {...register('bloodGroup', { required: 'Blood group is required' })}
                >
                  <option value="">Select blood group</option>
                  {bloodGroups.map(group => (
                    <option key={group} value={group}>{group}</option>
                  ))}
                </select>
                {errors.bloodGroup && (
                  <span className="text-error text-sm mt-1">{errors.bloodGroup.message}</span>
                )}
              </div>

              {/* District */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">District</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  {...register('district', { required: 'District is required' })}
                >
                  <option value="">Select district</option>
                  {allDistricts.map(district => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </select>
                {errors.district && (
                  <span className="text-error text-sm mt-1">{errors.district.message}</span>
                )}
              </div>

              {/* Upazila */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-semibold">Upazila</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  disabled={!selectedDistrict}
                  {...register('upazila', { required: 'Upazila is required' })}
                >
                  <option value="">Select upazila</option>
                  {upazilas.map(upazila => (
                    <option key={upazila} value={upazila}>{upazila}</option>
                  ))}
                </select>
                {errors.upazila && (
                  <span className="text-error text-sm mt-1">{errors.upazila.message}</span>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-error text-white w-full gap-2"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                <>
                  <FaSearch /> Search Donors
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Results */}
        {searched && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {donors.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-2xl shadow-xl">
                <p className="text-gray-500 text-lg">No donors found matching your criteria</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Found {donors.length} donor{donors.length !== 1 ? 's' : ''}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {donors.map((donor, index) => (
                    <motion.div
                      key={donor._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
                    >
                      <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 text-white">
                        <div className="flex items-center gap-4">
                          <div className="avatar">
                            <div className="w-16 h-16 rounded-full ring ring-white ring-offset-2">
                              <img src={donor.avatar} alt={donor.name} />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{donor.name}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <FaTint />
                              <span className="text-lg font-semibold">{donor.bloodGroup}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 space-y-3">
                        <div className="flex items-start gap-2">
                          <FaUser className="text-error mt-1" />
                          <div>
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="font-medium">{donor.email}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <FaMapMarkerAlt className="text-error mt-1" />
                          <div>
                            <p className="text-sm text-gray-500">Location</p>
                            <p className="font-medium">
                              {donor.district}, {donor.upazila}
                            </p>
                          </div>
                        </div>

                        <div className="pt-3">
                          <span className={`badge ${
                            donor.status === 'active' ? 'badge-success' : 'badge-error'
                          }`}>
                            {donor.status}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SearchDonors;