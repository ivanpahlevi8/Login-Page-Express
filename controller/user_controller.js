// this is controller

const userService = require('../service/user_service');

async function addData(req, res) {
    // get input from body
    const myBody = req.body;

    // get data from body
    const getFirstName = myBody.firstname;
    const getMiddleName = myBody.middlename;
    const getLastName = myBody.lastname;
    const getAge = myBody.age;
    const getAddress = myBody.address;
    const getUsername = myBody.username;
    const getPassword = myBody.password;

    // input obj
    const inputObj = {
        firstName: getFirstName,
        middleName: getMiddleName,
        lastName: getLastName,
        age: getAge,
        address: getAddress,
        username: getUsername,
        password: getPassword
    }

    const getRes = await userService.addUser(inputObj);

    res.status(201).json(getRes);
}

async function getAllData(req, res) {
    const response = await userService.getAlllUser();

    if (!response.success) {
        // error happend
        res.status(500).json(response);
    } else {
        res.status(200).json(response);
    }
}

async function getDataById(req, res) {
    // get params
    const params = req.params;
    // get id
    const getId = params.id;

    // get data
    const response = await userService.getUserById(getId)

    if (!response.success) {
        // if error happen
        return res.status(500).json(response);
    } else {
        return res.status(200).json(response);
    }
}

async function getDataByFirstName(req, res) {
    // get params
    const params = req.params;
    // get first name
    const getFirstName = params.firstname;

    // get data
    const response = await userService.getUserByFirstName(getFirstName);

    if (!response.success) {
        // if error happen
        return res.status(500).json(response);
    } else {
        return res.status(200).json(response);
    }
}

async function getDataByMiddleName(req, res) {
    // get params
    const params = req.params;
    // gte middle name
    const getMiddleName = params.middlename;

    // get data
    const response = await userService.getUserByMiddleName(getMiddleName);

    if (!response.success) {
        // error happen
        res.status(500).json(response);
    } else {
        res.status(200).json(response);
    }
}

async function getDataByLastName(req, res) {
    // get params
    const params = req.params;
    // get last name
    const getLastName = params.lastname;

    // get data
    const response = await userService.getUserByLastName(getLastName);

    if (!response.success) {
        // error happen
        return res.status(500).json(response);
    } else {
        return res.status(200).json(response);
    }
}

async function getDataByAge(req, res) {
    // get params
    const params = req.params;
    // get age
    const age = params.age;

    // get data
    const response = await userService.getUserByAge(age);

    if (!response.success) {
        // if error happen
        return res.status(500).json(response);
    } else {
        return res.status(200).json(response);
    }
}

async function getDataByAddress(req, res) {
    // get params
    const params = req.params;
    // get address
    const getAddress = params.address;

    // get data
    const response = await userService.getUserByAddress(getAddress);

    if (!response.success) {
        // if error happen
        return res.status(500).json(response);
    } else {
        return res.status(200).json(response);
    }
}

async function getDataByUsername(req, res) {
    // get params
    const params = req.params;
    // get username
    const getUsername = params.username;

    // get data
    const response = await userService.getUserByUsername(getUsername);

    console.log('response : ', response.data);

    if (!response.success) {
        return res.status(500).json(response);
    } else {
        return res.status(200).json(response);
    }
}

async function updateDataById(req, res) {
    // get params
    const params = req.params;

    // get id
    const getId = params.id;

    // get body
    const getBody = req.body;

    // updat date
    const response = await userService.updateUserById(getId, getBody);

    if (!response.success) {
        // if error happen
        res.status(500).json(response);
    } else {
        res.status(200).json(response);
    }
}

async function updateDataByFirstName(req, res) {
    // get params
    const params = req.params;

    // get name
    const getFirstName = params.firstname;

    // get body
    const getBody = req.body;

    // updat4e
    const response = await userService.updateUserByFirstName(getFirstName, getBody);

    if (!response.success) {
        // if there is an error
        res.status(500).json(response);
    } else {
        res.status(200).json(response);
    }
}

async function updateDataByMiddleName(req, res) {
    // get params
    const params = req.params;

    // get name
    const getMiddleName = params.middlename;

    // get body
    const getBody = req.body;

    // updat4e
    const response = await userService.updateUserByMiddleName(getMiddleName, getBody);

    if (!response.success) {
        // if there is an error
        res.status(500).json(response);
    } else {
        res.status(200).json(response);
    }
}

async function updateDataByLastName(req, res) {
    // get params
    const params = req.params;

    // get name
    const getLastName = params.lastname;

    // get body
    const getBody = req.body;

    // updat4e
    const response = await userService.updateUserByLastName(getLastName, getBody);

    if (!response.success) {
        // if there is an error
        res.status(500).json(response);
    } else {
        res.status(200).json(response);
    }
}

async function updateDataByAge(req, res) {
    // get params
    const params = req.params;

    // get name
    const getAge = params.age;

    // get body
    const getBody = req.body;

    // updat4e
    const response = await userService.updateUserByAge(getAge, getBody);

    if (!response.success) {
        // if there is an error
        res.status(500).json(response);
    } else {
        res.status(200).json(response);
    }
}

async function updateDataByAddress(req, res) {
    // get params
    const params = req.params;

    // get name
    const getAddress = params.address;

    // get body
    const getBody = req.body;

    // updat4e
    const response = await userService.updateUserByAddress(getAddress, getBody);

    if (!response.success) {
        // if there is an error
        res.status(500).json(response);
    } else {
        res.status(200).json(response);
    }
}

async function updateDataByUsername(req, res) {
    // get params
    const params = req.params;

    // get name
    const getUsername = params.username;

    // get body
    const getBody = req.body;

    // updat4e
    const response = await userService.updateUserByUsername(getUsername, getBody);

    if (!response.success) {
        // if there is an error
        res.status(500).json(response);
    } else {
        res.status(200).json(response);
    }
}

async function deleteDataById(req, res) {
    // get params
    const params = req.params;

    // get id
    const getId = params.id;

    // delete data
    const response = await userService.deleteUserById(getId);

    if (!response.success) {
        // error happen
        res.status(500).json(response);
    } else {
        res.status(200).json(response);
    }
}

async function deleteDataByFirstName(req, res) {
    // gte params
    const params = req.params;

    // get first name
    const getFirstName = params.firstname;

    //delete data
    const response = await userService.deleteUserByFirstName(getFirstName);

    if (!response.success) {
        // if error happen
        res.status(500).json(response);
    } else {
        res.status(200).json(response);
    }
}

async function deleteDataByMiddleName(req, res) {
    // gte params
    const params = req.params;

    // get first name
    const getMiddleName = params.mdidlename;

    //delete data
    const response = await userService.deleteUserByMiddleName(getMiddleName);

    if (!response.success) {
        // if error happen
        res.status(500).json(response);
    } else {
        res.status(200).json(response);
    }
}

async function deleteDataByLastName(req, res) {
    // gte params
    const params = req.params;

    // get first name
    const getLastName = params.lastname;

    //delete data
    const response = await userService.deleteUserByLastName(getLastName);

    if (!response.success) {
        // if error happen
        res.status(500).json(response);
    } else {
        res.status(200).json(response);
    }
}

async function deleteDataByAge(req, res) {
    // gte params
    const params = req.params;

    // get first name
    const getAge = params.age;

    //delete data
    const response = await userService.deleteUserByAge(getAge);

    if (!response.success) {
        // if error happen
        res.status(500).json(response);
    } else {
        res.status(200).json(response);
    }
}

async function deleteDataByAddress(req, res) {
    // gte params
    const params = req.params;

    // get first name
    const getAdress = params.address;

    //delete data
    const response = await userService.deleteUserByAddress(getAdress);

    if (!response.success) {
        // if error happen
        res.status(500).json(response);
    } else {
        res.status(200).json(response);
    }
}

async function deleteDataByUsername(req, res) {
    // gte params
    const params = req.params;

    // get first name
    const getUsername = params.username;

    //delete data
    const response = await userService.deleteUserByUsername(getUsername);

    if (!response.success) {
        // if error happen
        res.status(500).json(response);
    } else {
        res.status(200).json(response);
    }
}

module.exports = {
    addData,
    getAllData,
    getDataById,
    getDataByFirstName,
    getDataByMiddleName,
    getDataByLastName,
    getDataByAge,
    getDataByAddress,
    getDataByUsername,
    updateDataById,
    updateDataByFirstName,
    updateDataByMiddleName,
    updateDataByLastName,
    updateDataByAge,
    updateDataByAddress,
    updateDataByUsername,
    deleteDataById,
    deleteDataByFirstName,
    deleteDataByMiddleName,
    deleteDataByLastName,
    deleteDataByAge,
    deleteDataByAddress,
    deleteDataByUsername
}