const mongo = require("./database/mongo");
const responseGenerator = require("../../utils/responseGenerator");
const responseMessages = require("../../utils/responseMessages");

module.exports = {
    listCars: async (req, res, next) => {
        const laptops = [
            {
                "id": 0,
                "name": "Lenovo L50",
                img: "https://images.unsplash.com/photo-1578598335941-2ddafa759de2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80",
                "model": "model1",
                "categoryId": 0,
                "price": 35000,
                "description": "Lorem ipsum dolor sit amet"
            },
            {
                "id": 1,
                "name": "MSI 120",
                "model": "model1",
                img: "https://images.unsplash.com/photo-1619683172106-ff242162eb4b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80",
                "categoryId": 0,
                "price": 65000,
                "description": "Lorem ipsum dolor sit amet"
            },
            {
                "id": 2,
                "name": "Lenovo L52",
                "model": "model88",
                img: "https://images.unsplash.com/photo-1623040522601-18ef4bf3ddc9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80",
                "categoryId": 0,
                "price": 120000,
                "description": "Lorem ipsum dolor sit amet"
            },
            {
                "id": 3,
                "name": "HP E120",
                "model": "model 230",
                img: "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1631&q=80",
                "categoryId": 0,
                "price": 80500,
                "description": "Lorem ipsum dolor sit amet"
            },
            {
                "id": 5,
                "name": "Vivo150",
                "model": "M Mobile 1",
                img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
                "categoryId": 1,
                "price": 15000,
                "description": "Lorem ipsum dolor sit amet"
            },
            {
                "id": 6,
                "name": "Pixel 4a",
                "model": "Test Model",
                img: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2073&q=80",
                "categoryId": 1,
                "price": 65000,
                "description": "Lorem ipsum dolor sit amet"
            },
            {
                "id": 7,
                "name": "Lenovo L50",
                "model": "model1",
                img: "https://images.unsplash.com/photo-1578598335941-2ddafa759de2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80",
                "categoryId": 0,
                "price": 35000,
                "description": "Lorem ipsum dolor sit amet"
            },
            {
                "id": 8,
                "name": "MI",
                "model": "Redmi 122",
                "categoryId": 1,
                img: "https://images.unsplash.com/photo-1578598335941-2ddafa759de2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80",
                "price": 10000,
                "description": "Lorem ipsum dolor sit amet"
            },
            {
                "id": 9,
                "name": "IPhone",
                "model": "XE",
                "categoryId": 1,
                img: "https://images.unsplash.com/photo-1578598335941-2ddafa759de2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80",
                "price": 135000,
                "description": "Lorem ipsum dolor sit amet"
            }
        ]
        try {
            const {
                statusCode,
                msg,
                isShown,
            } = responseMessages.listCars.codes;
            res
                .status(statusCode)
                .send(responseGenerator.getResponse(statusCode, msg, isShown, laptops));
        } catch (err) {
            next(err);
        }
    },
    createContact: async (req, res, next) => {
        const { name, email, message } = req.body
        const profile = {
            name, email, message
        }
        try {
            await mongo.createContact(profile)
            const {
                statusCode,
                msg,
                isShown,
            } = responseMessages.contacts.codes;
            res
                .status(statusCode)
                .send(responseGenerator.getResponse(statusCode, msg, isShown));
        } catch (err) {
            next(err);
        }
    }
};