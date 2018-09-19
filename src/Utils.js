import _ from 'lodash';

const filteringtheArray = (productData, filterData)=>{
    let idOfFilterData = filterData.map((id,index)=>{return id.id});
console.log(idOfFilterData);
    return _.filter(productData, (v) => _.indexOf(idOfFilterData, v.id) === -1)
}


const viewData =(data)=>{
console.log('data',data)
    return data.map((info,index)=>{
        console.log(info)
        return info.id

    })
}
export {filteringtheArray, viewData};