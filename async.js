import cryptoJS from "crypto-js";

export const encryptMessage = (message, key, callback) => {
  const encryptedMessage = cryptoJS.AES.encrypt(message, key).toString();

  callback(encryptedMessage);
};

export const encryptMessagePromise = (message, key) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const encryptedMessage = cryptoJS.AES.encrypt(message, key).toString();

      if (encryptedMessage) {
        resolve(encryptedMessage);
      } else {
        reject(new Error("Failed to encrypt message!"));
      }
    }, 2000);
  });
};

const message = {
  email: "explain@mail.com",
  password: "1234567",
};

const secretKey = "sdffewuyvbhvsihiojijygugygf";

encryptMessage(JSON.stringify(message), secretKey, (encryptedMessage) => {
  console.log(encryptedMessage);
});

encryptMessagePromise(JSON.stringify(message), secretKey).then(
  (encryptedMessage) => {
    console.log(encryptedMessage);
  },
);

// off day
