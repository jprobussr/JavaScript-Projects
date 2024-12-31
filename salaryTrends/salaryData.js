const salaryData = [
    { role: 'CTO', company: 'Amazon', salary: 320000 },
    { role: 'Technical Lead', company: 'Amazon', salary: 230000 },
    { role: 'Software Engineer II', company: 'Amazon', salary: 180000 },
    { role: 'Software Engineer I', company: 'Amazon', salary: 140000 },
    { role: 'CTO', company: 'Ebay Inc.', salary: 215000 },
    { role: 'Technical Lead', company: 'Ebay Inc.', salary: 165000 },
    { role: 'Software Engineer II', company: 'Ebay Inc.', salary: 140000 },
    { role: 'Software Engineer I', company: 'Ebay Inc.', salary: 115000 },
    { role: 'CTO', company: 'Texas Road House', salary: 175000 },
    { role: 'Technical Lead', company: 'Texas Road House', salary: 135000 },
    { role: 'Software Engineer II', company: 'Texas Road House', salary: 115000 },
    { role: 'Software Engineer I', company: 'Texas Road House', salary: 95000 },
];

const getRoles = () => {
    return ['CTO', 'Technical Lead', 'Software Engineer II', 'Software Engineer I'];
}

const getCompanies = () => {
    return ['Amazon', 'Ebay Inc.', 'Texas Road House'];
}

const getDataByRole = role => {
    return salaryData.filter(obj => obj.role === role);
}

const getDataByCompany = company => {
    return salaryData.filter(obj => obj.company === company);
}

export { getRoles, getCompanies, getDataByRole, getDataByCompany };
export default salaryData;

