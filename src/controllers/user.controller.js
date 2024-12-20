import { userService } from "../services/user.service.js";
import { response } from "../../config/response.js";

export const userController = {
	register: async (req, res) => {
		try {
			const { email, password } = req.body;
			const result = await userService.registerUser(email, password);
			res.status(201).send(response(201, result));
		} catch (err) {
			res.status(400).send(response(400, { error: err.message }));
		}
	},

	login: async (req, res) => {
		try {
			const { email, password } = req.body;
			const result = await userService.loginUser(email, password);
			res.status(200).send(response(200, result));
		} catch (err) {
			res.status(401).send(response(401, { error: err.message }));
		}
	},

	requestPasswordReset: async (req, res) => {
		const { email } = req.body;
		try {
			const response = await userService.requestPasswordReset(email);
			res.status(200).json(response);
		} catch (error) {
			res.status(400).json({ error: error.message });
		}
	},

	verifyCodeAndResetPassword: async (req, res) => {
		const { email, code, newPassword } = req.body;
		try {
			const response = await userService.verifyCodeAndResetPassword(email, code, newPassword);
			res.status(200).json(response);
		} catch (error) {
			res.status(400).json({ error: error.message });
		}
	},

	updateProfile: async (req, res) => {
		try {
			const { id } = req.params;

			const profileData = {
				...req.body,
				gamePreferences: Array.isArray(req.body.gamePreferences)
					? req.body.gamePreferences // 이미 배열이면 그대로 사용
					: req.body.gamePreferences
					? req.body.gamePreferences.split(",") // 문자열이면 split
					: [],
				studyPreferences: Array.isArray(req.body.studyPreferences)
					? req.body.studyPreferences
					: req.body.studyPreferences
					? req.body.studyPreferences.split(",")
					: [],
				foodPreferences: Array.isArray(req.body.foodPreferences)
					? req.body.foodPreferences
					: req.body.foodPreferences
					? req.body.foodPreferences.split(",")
					: [],
				sleepingHabits: Array.isArray(req.body.sleepingHabits)
					? req.body.sleepingHabits
					: req.body.sleepingHabits
					? req.body.sleepingHabits.split(",")
					: [],
			};

			// 서비스 함수 호출
			const result = await userService.updateProfile(Number(id), profileData);

			res.status(200).send(response(200, result));
		} catch (err) {
			console.error(err);
			res.status(400).send(response(400, { error: err.message }));
		}
	},

	getUserById: async (req, res) => {
		try {
			const { id } = req.params;
			const result = await userService.getUserById(Number(id));
			res.status(200).send(response(200, result));
		} catch (err) {
			res.status(404).send(response(404, { error: err.message || "Unknown error occurred" }));
		}
	},

	filterUsers: async (req, res) => {
		try {
			const filterData = req.body; // 클라이언트에서 보낸 필터 데이터
			const users = await userService.filterUsers(filterData);

			return res.status(200).json(users);
		} catch (err) {
			console.error(err);
			res.status(404).send(response(404, { error: err.message || "Unknown error occurred" }));
		}
	},

	sendMessage: async (req, res) => {
		try {
			const { senderId, receiverId, content } = req.body;
			const result = await userService.sendMessage(senderId, receiverId, content);
			res.status(201).send(response(201, result));
		} catch (err) {
			res.status(400).send(response(400, { error: err.message }));
		}
	},

	getSentMessages: async (req, res) => {
		try {
			const { userId } = req.params;
			const result = await userService.getSentMessages(Number(userId));
			res.status(200).send(response(200, result));
		} catch (err) {
			res.status(400).send(response(400, { error: err.message }));
		}
	},

	getReceivedMessages: async (req, res) => {
		try {
			const { userId } = req.params;
			const result = await userService.getReceivedMessages(Number(userId));
			res.status(200).send(response(200, result));
		} catch (err) {
			res.status(400).send(response(400, { error: err.message }));
		}
	},
};
