// user service

const userModel = require('../model/user_model')

async function addUser(user) {
    try {
        const getFirstName = user.firstName;
        const getMiddleName = user.middleName;
        const getLastName = user.lastName;
        const getAge = user.age;
        const getAddress = user.address;
        const getUsername = user.username;
        const getPassword = user.password;

        // make object
        const newObj = {
            firstName: getFirstName,
            middleName: getMiddleName,
            lastName: getLastName,
            age: getAge,
            address: getAddress,
            username: getUsername,
            password: getPassword
        }

        const response = await userModel.userModel.create(newObj);

        return response;
    } catch (err) {
        const response = {
            msg: err
        }
        return response;
    }

}

async function getAlllUser() {
    try {
        const response = await userModel.userModel.find({});
        const result = {
            success: true,
            response: response
        }
        return result
    } catch (err) {
        const response = {
            error: err
        }
        const result = {
            success: false,
            response: response
        }
        return result
    }
}

async function getUserById(id) {
    try {
        // get all data
        const getData = await userModel.userModel.findOne({ _id: id });
        // check data 
        if (!getData) {
            //if data not exist
            const result = {
                success: false,
                data: `no data with certain ${id}`
            }
            return result;
        } else {
            const result = {
                success: true,
                data: getData
            }
            return result;
        }
    } catch (err) {
        const result = {
            success: false,
            data: err
        }
        return result;
    }
}

async function getUserByFirstName(firstName) {
    try {
        // get all data
        const allData = await userModel.userModel.find({});
        // get data
        const getData = allData.find(
                (data) => {
                    return data.firstName === firstName;
                }
            )
            // check if data exist
        if (!getData) {
            // if data not exist
            const result = {
                success: false,
                data: `no data with certain first name : ${firstName}`
            }
            return result;
        } else {
            const result = {
                success: true,
                data: getData
            }
            return result;
        }
    } catch (err) {
        const result = {
            success: false,
            data: err
        }
        return result;
    }
}

async function getUserByMiddleName(middleName) {
    try {
        // get all data first
        const allData = await userModel.userModel.find({});
        // get data 
        const getData = allData.find(
                (data) => {
                    return data.middleName === middleName;
                }
            )
            // check if data exist
        if (!getData) {
            // if data not found
            const result = {
                success: false,
                data: `data not found with certain middle name : ${middleName}`
            }
            return result;
        } else {
            // if data founded
            const result = {
                success: true,
                data: getData
            }
            return result;
        }
    } catch (err) {
        const result = {
            success: false,
            data: err
        }
        return result;
    }
}

async function getUserByLastName(lastName) {
    try {
        // get all user
        const allUser = await userModel.userModel.find({});
        // get data
        const getData = allUser.find(
                (data) => {
                    return data.lastName === lastName;
                }
            )
            // check if data exist
        if (!getData) {
            // if data not exist
            const result = {
                success: false,
                data: `data not found with certain lastname : ${lastName}`
            }
            return result;
        } else {
            const result = {
                success: true,
                data: getData
            }
            return result;
        }
    } catch (err) {
        const result = {
            success: false,
            data: err
        }
        return result;
    }
}

async function getUserByAge(age) {
    try {
        // get all data first
        const allData = await userModel.userModel.find({});
        // get certain data
        const getData = allData.find(
                (data) => {
                    return data.age === age;
                }
            )
            // check if data exist
        if (!getData) {
            // data not found
            const result = {
                success: false,
                data: `data not found with certain age : ${age}`
            }
            return result;
        } else {
            const result = {
                success: true,
                data: getData
            }
            return result;
        }
    } catch (err) {
        const result = {
            success: false,
            data: err
        }
        return result;
    }
}

async function getUserByAddress(address) {
    try {
        // get all data
        const allData = await userModel.userModel.find({});
        // get certain data
        const getData = allData.find(
                (data) => {
                    return data.address === address
                }
            )
            // check if darta exist
        if (!getData) {
            // data not found
            const result = {
                success: false,
                data: `data not found with certain address : ${address}`
            }
            return result;
        } else {
            const result = {
                success: true,
                data: getData
            }
            return result;
        }
    } catch (err) {
        const result = {
            success: false,
            data: err
        }
        return result;
    }
}

async function getUserByUsername(username) {
    try {
        // get all data
        const allData = await userModel.userModel.find({}); // await diperlukan agar proses pengambilan data selesai
        // get certain data
        const getData = allData.find(
                (data) => {
                    return data.username === username;
                }
            )
            // check if data exist
        if (!getData) {
            // if data not exist
            const result = {
                success: false,
                data: `data not found with certain username : ${username}`
            }
            return result;
        } else {
            const result = {
                success: true,
                data: getData
            }
            return result
        }
    } catch (err) {
        const result = {
            success: false,
            data: err
        }
        return result;
    }
}

async function updateUserById(id, newData) {
    try {
        // get data from new data
        const getFirstName = newData.firstName;
        const getMiddleName = newData.middleName;
        const getLastName = newData.lastName;
        const getAge = newData.age;
        const getAddress = newData.address;
        const getUsername = newData.username;
        const getPassword = newData.password;

        // make new object
        const newObj = {
            firstName: getFirstName,
            middleName: getMiddleName,
            lastName: getLastName,
            age: getAge,
            address: getAddress,
            username: getUsername,
            password: getPassword
        }

        // do update
        const response = await userModel.userModel.findOneAndUpdate({ _id: id }, newObj, {
                new: true,
                runValidators: true
            })
            // new digunakan agak return dari response merupakan data baru yang ditambahkan
            // run validators digunakan agar masukkan dilakukan validasi seperti yang terdapat pada model.
        if (!response) {
            // jika data tidak ditemukan
            const result = {
                success: false,
                data: `cannot update data with certain id : ${id}`
            }
            return result;
        } else {
            const result = {
                success: true,
                data: response
            }
            return result;
        }
    } catch (err) {
        const result = {
            success: false,
            data: err
        }
        return result;
    }
}

async function updateUserByFirstName(firstName, newData) {
    try {
        // get data from new data
        const getFirstName = newData.firstName;
        const getMiddleName = newData.middleName;
        const getLastName = newData.lastName;
        const getAge = newData.age;
        const getAddress = newData.address;
        const getUsername = newData.username;
        const getPassword = newData.password;

        // make new object
        const newObj = {
            firstName: getFirstName,
            middleName: getMiddleName,
            lastName: getLastName,
            age: getAge,
            address: getAddress,
            username: getUsername,
            password: getPassword
        }

        // get data by certain name
        const allData = await userModel.userModel.find({});

        const getCertainData = allData.find(
            (data) => {
                return data.firstName === firstName;
            }
        )

        // check if data exist
        if (!getCertainData) {
            // if data not exist
            const result = {
                success: false,
                data: `no data with certain firstName : ${firstName}`
            }
            return result;
        } else {
            // data exist
            const getId = getCertainData.id;
            const response = await userModel.userModel.findOneAndUpdate({ _id: getId }, newObj, {
                new: true,
                runValidators: true
            })
            const result = {
                success: true,
                data: response
            }
            return result;
        }
    } catch (err) {
        const result = {
            success: false,
            data: err
        }
        return result;
    }
}

async function updateUserByMiddleName(middleName, newData) {
    try {
        // get data from new data
        const getFirstName = newData.firstName;
        const getMiddleName = newData.middleName;
        const getLastName = newData.lastName;
        const getAge = newData.age;
        const getAddress = newData.address;
        const getUsername = newData.username;
        const getPassword = newData.password;

        // make new object
        const newObj = {
            firstName: getFirstName,
            middleName: getMiddleName,
            lastName: getLastName,
            age: getAge,
            address: getAddress,
            username: getUsername,
            password: getPassword
        }

        // get data by certain name
        const allData = await userModel.userModel.find({});

        const getCertainData = allData.find(
            (data) => {
                return data.middleName === middleName;
            }
        )

        // check if data exist
        if (!getCertainData) {
            // if data not exist
            const result = {
                success: false,
                data: `no data with certain middle name : ${middleName}`
            }
            return result;
        } else {
            // data exist
            const getId = getCertainData.id;
            const response = await userModel.userModel.findOneAndUpdate({ _id: getId }, newObj, {
                new: true,
                runValidators: true
            })
            const result = {
                success: true,
                data: response
            }
            return result;
        }
    } catch (err) {
        const result = {
            success: false,
            data: err
        }
        return result;
    }
}

async function updateUserByLastName(lastName, newData) {
    try {
        // get data from new data
        const getFirstName = newData.firstName;
        const getMiddleName = newData.middleName;
        const getLastName = newData.lastName;
        const getAge = newData.age;
        const getAddress = newData.address;
        const getUsername = newData.username;
        const getPassword = newData.password;

        // make new object
        const newObj = {
            firstName: getFirstName,
            middleName: getMiddleName,
            lastName: getLastName,
            age: getAge,
            address: getAddress,
            username: getUsername,
            password: getPassword
        }

        // get data by certain name
        const allData = await userModel.userModel.find({});

        const getCertainData = allData.find(
            (data) => {
                return data.lastName === lastName;
            }
        )

        // check if data exist
        if (!getCertainData) {
            // if data not exist
            const result = {
                success: false,
                data: `no data with certain last name : ${lastName}`
            }
            return result;
        } else {
            // data exist
            const getId = getCertainData.id;
            const response = await userModel.userModel.findOneAndUpdate({ _id: getId }, newObj, {
                new: true,
                runValidators: true
            })
            const result = {
                success: true,
                data: response
            }
            return result;
        }
    } catch (err) {
        const result = {
            success: false,
            data: err
        }
        return result;
    }
}

async function updateUserByAge(age, newData) {
    try {
        // get data from new data
        const getFirstName = newData.firstName;
        const getMiddleName = newData.middleName;
        const getLastName = newData.lastName;
        const getAge = newData.age;
        const getAddress = newData.address;
        const getUsername = newData.username;
        const getPassword = newData.password;

        // make new object
        const newObj = {
            firstName: getFirstName,
            middleName: getMiddleName,
            lastName: getLastName,
            age: getAge,
            address: getAddress,
            username: getUsername,
            password: getPassword
        }

        // get data by certain name
        const allData = await userModel.userModel.find({});

        const getCertainData = allData.find(
            (data) => {
                return data.age === age;
            }
        )

        // check if data exist
        if (!getCertainData) {
            // if data not exist
            const result = {
                success: false,
                data: `no data with certain age : ${age}`
            }
            return result;
        } else {
            // data exist
            const getId = getCertainData.id;
            const response = await userModel.userModel.findOneAndUpdate({ _id: getId }, newObj, {
                new: true,
                runValidators: true
            })
            const result = {
                success: true,
                data: response
            }
            return result;
        }
    } catch (err) {
        const result = {
            success: false,
            data: err
        }
        return result;
    }
}

async function updateUserByAddress(address, newData) {
    try {
        // get data from new data
        const getFirstName = newData.firstName;
        const getMiddleName = newData.middleName;
        const getLastName = newData.lastName;
        const getAge = newData.age;
        const getAddress = newData.address;
        const getUsername = newData.username;
        const getPassword = newData.password;

        // make new object
        const newObj = {
            firstName: getFirstName,
            middleName: getMiddleName,
            lastName: getLastName,
            age: getAge,
            address: getAddress,
            username: getUsername,
            password: getPassword
        }

        // get data by certain name
        const allData = await userModel.userModel.find({});

        const getCertainData = allData.find(
            (data) => {
                return data.address === address;
            }
        )

        // check if data exist
        if (!getCertainData) {
            // if data not exist
            const result = {
                success: false,
                data: `no data with certain address : ${address}`
            }
            return result;
        } else {
            // data exist
            const getId = getCertainData.id;
            const response = await userModel.userModel.findOneAndUpdate({ _id: getId }, newObj, {
                new: true,
                runValidators: true
            })
            const result = {
                success: true,
                data: response
            }
            return result;
        }
    } catch (err) {
        const result = {
            success: false,
            data: err
        }
        return result;
    }
}

async function updateUserByUsername(username, newData) {
    try {
        // get data from new data
        const getFirstName = newData.firstName;
        const getMiddleName = newData.middleName;
        const getLastName = newData.lastName;
        const getAge = newData.age;
        const getAddress = newData.address;
        const getUsername = newData.username;
        const getPassword = newData.password;

        // make new object
        const newObj = {
            firstName: getFirstName,
            middleName: getMiddleName,
            lastName: getLastName,
            age: getAge,
            address: getAddress,
            username: getUsername,
            password: getPassword
        }

        // get data by certain name
        const allData = await userModel.userModel.find({});

        const getCertainData = allData.find(
            (data) => {
                return data.username === username;
            }
        )

        // check if data exist
        if (!getCertainData) {
            // if data not exist
            const result = {
                success: false,
                data: `no data with certain username : ${username}`
            }
            return result;
        } else {
            // data exist
            const getId = getCertainData.id;
            const response = await userModel.userModel.findOneAndUpdate({ _id: getId }, newObj, {
                new: true,
                runValidators: true
            })
            const result = {
                success: true,
                data: response
            }
            return result;
        }
    } catch (err) {
        const result = {
            success: false,
            data: err
        }
        return result;
    }
}

async function deleteUserById(id) {
    try {
        // delete user
        const response = await userModel.userModel.findOneAndDelete({ _id: id });

        // check response
        if (!response) {
            // if failed to delete
            const result = {
                success: false,
                data: `cannot delete user by certain id : ${id}`
            }
            return result;
        } else {
            // success
            const result = {
                success: true,
                data: response
            }
            return result;
        }
    } catch (err) {
        const result = {
            success: false,
            data: err
        }
        return result;
    }
}

async function deleteUserByFirstName(firstName) {
    try {
        // get all user first
        const allUser = await userModel.userModel.find({});

        // get certain user with first name
        const certainUser = allUser.find(
            (data) => {
                return data.firstName === firstName;
            }
        )

        // check if use
        if (!certainUser) {
            // if data not exist
            const result = {
                success: false,
                data: `cannot delete user with certain first name : ${firstName}`
            }
            return result;
        } else {
            const getId = certainUser.id;
            const response = await userModel.userModel.findOneAndDelete({ _id: getId });
            const result = {
                success: true,
                data: response
            }
            return result;
        }
    } catch (err) {
        const result = {
            success: false,
            data: err
        }
        return result;
    }
}

async function deleteUserByMiddleName(middleName) {
    try {
        // get all user first
        const allUser = await userModel.userModel.find({});

        // get certain user with first name
        const certainUser = allUser.find(
            (data) => {
                return data.middleName === middleName;
            }
        )

        // check if use
        if (!certainUser) {
            // if data not exist
            const result = {
                success: false,
                data: `cannot delete user with certain middle name : ${middleName}`
            }
            return result;
        } else {
            const getId = certainUser.id;
            const response = await userModel.userModel.findOneAndDelete({ _id: getId });
            const result = {
                success: true,
                data: response
            }
            return result;
        }
    } catch (err) {
        const result = {
            success: false,
            data: err
        }
        return result;
    }
}

async function deleteUserByLastName(lastName) {
    try {
        // get all user first
        const allUser = await userModel.userModel.find({});

        // get certain user with first name
        const certainUser = allUser.find(
            (data) => {
                return data.lastName === lastName;
            }
        )

        // check if use
        if (!certainUser) {
            // if data not exist
            const result = {
                success: false,
                data: `cannot delete user with certain last name : ${lastName}`
            }
            return result;
        } else {
            const getId = certainUser.id;
            const response = await userModel.userModel.findOneAndDelete({ _id: getId });
            const result = {
                success: true,
                data: response
            }
            return result;
        }
    } catch (err) {
        const result = {
            success: false,
            data: err
        }
        return result;
    }
}

async function deleteUserByAge(age) {
    try {
        // get all user first
        const allUser = await userModel.userModel.find({});

        // get certain user with first name
        const certainUser = allUser.find(
            (data) => {
                return data.age === age;
            }
        )

        // check if use
        if (!certainUser) {
            // if data not exist
            const result = {
                success: false,
                data: `cannot delete user with certain age : ${age}`
            }
            return result;
        } else {
            const getId = certainUser.id;
            const response = await userModel.userModel.findOneAndDelete({ _id: getId });
            const result = {
                success: true,
                data: response
            }
            return result;
        }
    } catch (err) {
        const result = {
            success: false,
            data: err
        }
        return result;
    }
}

async function deleteUserByAddress(address) {
    try {
        // get all user first
        const allUser = await userModel.userModel.find({});

        // get certain user with first name
        const certainUser = allUser.find(
            (data) => {
                return data.address === address;
            }
        )

        // check if use
        if (!certainUser) {
            // if data not exist
            const result = {
                success: false,
                data: `cannot delete user with certain address : ${address}`
            }
            return result;
        } else {
            const getId = certainUser.id;
            const response = await userModel.userModel.findOneAndDelete({ _id: getId });
            const result = {
                success: true,
                data: response
            }
            return result;
        }
    } catch (err) {
        const result = {
            success: false,
            data: err
        }
        return result;
    }
}

async function deleteUserByUsername(username) {
    try {
        // get all user first
        const allUser = await userModel.userModel.find({});

        // get certain user with first name
        const certainUser = allUser.find(
            (data) => {
                return data.username === username;
            }
        )

        // check if use
        if (!certainUser) {
            // if data not exist
            const result = {
                success: false,
                data: `cannot delete user with certain username : ${username}`
            }
            return result;
        } else {
            const getId = certainUser.id;
            const response = await userModel.userModel.findOneAndDelete({ _id: getId });
            const result = {
                success: true,
                data: response
            }
            return result;
        }
    } catch (err) {
        const result = {
            success: false,
            data: err
        }
        return result;
    }
}

module.exports = {
    addUser,
    getAlllUser,
    getUserById,
    getUserByFirstName,
    getUserByMiddleName,
    getUserByLastName,
    getUserByAge,
    getUserByAddress,
    getUserByUsername,
    updateUserById,
    updateUserByFirstName,
    updateUserByMiddleName,
    updateUserByLastName,
    updateUserByAge,
    updateUserByAddress,
    updateUserByUsername,
    deleteUserById,
    deleteUserByFirstName,
    deleteUserByMiddleName,
    deleteUserByLastName,
    deleteUserByAge,
    deleteUserByAddress,
    deleteUserByUsername
}