// Import the JSON files
import divisionsData from './divisions.json';
import districtsData from './districts.json';
import upazilasData from './upazilas.json';
import unionsData from './unions.json';

// Extract actual data from the JSON structure
const divisions = divisionsData.find(item => item.type === "table")?.data || [];
const districtsRaw = districtsData.find(item => item.type === "table")?.data || [];
const upazilasRaw = upazilasData.find(item => item.type === "table")?.data || [];
const unionsRaw = unionsData.find(item => item.type === "table")?.data || [];

// Get unique division names
export const divisionNames = [...new Set(divisions.map(d => d.name))];

// Get districts by division
export const getDistrictsByDivision = (divisionName) => {
  const division = divisions.find(d => d.name === divisionName);
  if (!division) return [];
  
  return districtsRaw.filter(d => d.division_id === division.id).map(d => d.name);
};

// Get all districts
export const allDistricts = districtsRaw.map(d => d.name);

// Get upazilas by district
export const getUpazilasByDistrict = (districtName) => {
  const district = districtsRaw.find(d => d.name === districtName);
  if (!district) return [];
  
  return upazilasRaw.filter(u => u.district_id === district.id).map(u => u.name);
};

// Get unions by upazila
export const getUnionsByUpazila = (upazilaName) => {
  const upazila = upazilasRaw.find(u => u.name === upazilaName);
  if (!upazila) return [];
  
  return unionsRaw.filter(un => un.upazilla_id === upazila.id).map(un => un.name);
};

// Blood groups
export const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];