const flatListData =[
  {
    key : '1',
    name : 'Chili Pekas',
    candyDescription: 'Paleta de Caramelo con chile'
  },
  {
    key : '2',
    name : 'Bibi Polviz',
    candyDescription: 'Polvito enchilado y caramelo macizo'
  },
  {
    key : '3',
    name : 'Bibi Frutix',
    candyDescription: 'Polvito acidulado y caramelo macizo'
  },
  {
    key : '4',
    name : 'Cachepigüi',
    candyDescription: 'Paleta de caramelo suave de distintos sabores'
  },
  {
    key : '5',
    name : 'Mega huevon',
    candyDescription: 'Pulpa de tamarindo confitado'
  },
  {
    key : '6',
    name : 'Mordidilla',
    candyDescription: 'Paleta suave enchilada con centro de pulpa de sabores '
  },
  {
    key : '7',
    name : 'Devoralien',
    candyDescription: 'Dulce suave sabores frutales'
  },
  {
    key : '8',
    name : 'Chachepigüi Doblex',
    candyDescription: 'Paleta de caramelo suave picosita'
  },
];





const addKeys = (val, key) => ({ key, ...val });

export default Array.from(flatListData).map(addKeys);