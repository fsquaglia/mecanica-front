
const infoSelect = (info)=>{
  return info?.map((data)=>({
    id:data.id,
    name: data.patent ?? data.name,
  }))

}

const roles = (role) => {
  switch (role) {
      case 0:
          return 'Admin';
      case 2:
          return 'Mecanico';
      case 9:
          return 'Superadmin';
      default:
          return 'User';
  }
};

export {
  infoSelect,
  roles
}