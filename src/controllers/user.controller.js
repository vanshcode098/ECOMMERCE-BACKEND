import { getUsersMessage } from "../services/user.service.js";
import sendResponse from "../utils/apiResponse.js";




const testUsers = (req, res) => {
  const message = getUsersMessage();

  res.status(200).json({
    success: true,
    message,
  });
};

export { testUsers };
