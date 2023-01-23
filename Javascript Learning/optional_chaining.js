const user = {
    firstName: 'vidhi',
    // address: {houseNumber: '1234'}
};

console.log(user.firstName);
// console.log(user.address.houseNumber);

// sometimes we access key which does not exist at that particular instant but baad me it can exist
// for that we can use ?.

console.log(user?.address?.houseNumber);
