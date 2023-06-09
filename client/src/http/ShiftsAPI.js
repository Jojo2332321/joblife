import {$authHost, $host} from "./index";
export const createCompanys= async (companys) =>
{
    const {data} = await $host.post('api/companys', companys)
    return data
}

export const fetchCompanys = async () =>
{
    const {data} = await $host.get('api/companys')
    return data
}

export const createCompanyType= async (companyType) =>
{
    const {data} = await $host.post('api/companyType', companyType)
    return data
}

export const fetchCompanyType = async () =>
{
    const {data} = await $host.get('api/companyType')
    return data
}

export const createWorkHourTemplates= async (workHourTemplates) =>
{
    const {data} = await $host.post('api/workHoursTemplates',workHourTemplates)
    return data
}
export const fetchWorkHourTemplates = async () =>
{
    const {data} = await $host.get('api/workHoursTemplates')
    return data
}


export const createPositions= async (positions) =>
{
    const {data} = await $host.post('api/companys', positions)
    return data
}

export const createWorkStatus=async (workStatus) =>
{
const {data} = await $host.post('api/workStatus', workStatus)
return data
}
export const createWorkPermit=async (workPermit) =>
{
    const {data} = await $host.post('api/workStatus', workPermit)
    return data
}


export const fetchPositions = async () =>
{
    const {data} = await $host.get('api/positions')
    return data
}

export const createWorker= async (worker) =>
{
    const {data} = await $host.post('api/workers', worker)
    return data
}

export const fetchWorker = async () =>
{
    const {data} = await $host.get('api/workers')
    return data
}

export const createShift = async (shift)=>
{
    const data = await $host.post('api/shifts')
    return data
}
export const fetchShift = async () =>
{
    const {data} = await $host.get('api/shifts')
    return data
}

export const deleteWorker = async (id) => {
    const response = await $host.delete('api/workers/' + id);
    return response.data;
};