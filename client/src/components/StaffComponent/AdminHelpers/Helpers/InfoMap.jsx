
const infoSelect = (info)=>{
  return info?.map((data)=>({
    id:data.id,
    name: data.patent ?? data.name,
  }))

}

export default infoSelect