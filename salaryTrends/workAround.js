import salaryData, {getRoles, getCompanies, getDataByRole, getDataByCompany} from "./salaryData.js";

const getAverageSalaryByRole = role => {
    const roleData = getDataByRole(role);
    const salariesOfRole = roleData.map(obj => obj.salary);
    return calculateAverage(salariesOfRole);
}


const calculateAverage = arrayOfNumbers => {
    let total = 0;
    arrayOfNumbers.forEach(number => total += number);
    return (total / arrayOfNumbers.length).toFixed(2);
}
console.log(getAverageSalaryByRole('Software Engineer II'));