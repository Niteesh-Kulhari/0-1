"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const otpLimiter = (0, express_rate_limit_1.default)({
    windowMs: 5 * 60 * 1000,
    max: 3,
    message: "Too many request please try after 5 minutes",
    standardHeaders: true,
    legacyHeaders: false
});
const passwordLimiter = (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: "Too many requests please try after 15 minutes",
    standardHeaders: true,
    legacyHeaders: false
});
const otpStore = {};
app.post("/generate-otp", otpLimiter, (req, res) => {
    const email = req.body.email;
    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore[email] = otp;
    console.log(`Otp for email: ${email} is ${otp}`);
    res.status(200).json({ message: "OTP generated and logged" });
});
app.post("/reset-password", passwordLimiter, (req, res) => {
    const { email, otp, newPassword } = req.body;
    if (otp === otpStore[email]) {
        console.log("Got it");
    }
    if (!email || !otp || !newPassword) {
        return res.status(400).json({ message: "Email, OTP or newPassword missing please check" });
    }
    if (otpStore[email] === otp) {
        console.log(`Password for ${email} has been reset to ${newPassword}`);
        delete otpStore[email];
        res.status(200).json({ message: "Password updated successfully" });
    }
    else {
        res.status(401).json({ message: "Incorrect otp please check" });
    }
});
app.listen(3000, () => {
    console.log("Server is up and running on port 3000");
});
