import express from "express";
import { userController } from "../controllers/user.controller.js";

const router = express.Router();

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: 사용자 등록
 *     description: 새로운 사용자를 등록합니다.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: test@example.com
 *               password:
 *                 type: string
 *                 example: Password123!
 *     responses:
 *       200:
 *         description: 사용자 등록 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 email:
 *                   type: string
 *       400:
 *         description: 잘못된 요청
 */
router.post("/register", userController.register);
/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: 사용자 로그인
 *     description: 로그인 id 반환.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: test@example.com
 *               password:
 *                 type: string
 *                 example: Password123!
 *     responses:
 *       200:
 *         description: 로그인 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 email:
 *                   type: string
 *       401:
 *         description: 인증 실패
 */
router.post("/login", userController.login);
/**
 * @swagger
 * /users/{id}/profile:
 *   put:
 *     summary: 사용자 프로필 업데이트
 *     description: 사용자 ID를 기반으로 프로필 정보를 업데이트합니다.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: 업데이트할 사용자 ID
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               gender:
 *                 type: string
 *                 example: 남성
 *               phoneNumber:
 *                 type: string
 *                 example: 010-1234-5678
 *               alarm:
 *                 type: string
 *                 example: 민감
 *               dormitoryDuration:
 *                 type: string
 *                 example: 6개월
 *               department:
 *                 type: string
 *                 example: Computer Science
 *               studentId:
 *                 type: string
 *                 example: 21학번
 *               lifestyle:
 *                 type: string
 *                 example: 아침형
 *               isSmoking:
 *                 type: boolean
 *                 example: false
 *               wakeUpTime:
 *                 type: string
 *                 example: 07:00
 *               sleepingTime:
 *                 type: string
 *                 example: 22:00
 *               lightOutTime:
 *                 type: string
 *                 example: 23:00
 *               showerTime:
 *                 type: string
 *                 example: 외출 전
 *               cleaningFrequency:
 *                 type: string
 *                 example: 매일
 *               itemSharingPreference:
 *                 type: string
 *                 example: 공유해요
 *               mbti:
 *                   type: string
 *                   example: ISFP
 *               gamePreferences:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["PC 게임해요", "모바일 게임해요"]
 *               studyPreferences:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["불 켜고 해요", "스탠드 키고 해요"]
 *               foodPreferences:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["간단한 간식", "식사"]
 *               sleepingHabits:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["코골이", "잠꼬대"]
 *     responses:
 *       200:
 *         description: 프로필 업데이트 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: John Doe
 *                 email:
 *                   type: string
 *                   example: john.doe@example.com
 *                 gender:
 *                   type: string
 *                   example: 남성
 *                 phoneNumber:
 *                   type: string
 *                   example: 010-1234-5678
 *                 alarm:
 *                   type: string
 *                   example: 민감
 *                 dormitoryDuration:
 *                   type: string
 *                   example: 6개월
 *                 department:
 *                   type: string
 *                   example: Computer Science
 *                 studentId:
 *                   type: string
 *                   example: 21학번
 *                 lifestyle:
 *                   type: string
 *                   example: 아침형
 *                 isSmoking:
 *                   type: boolean
 *                   example: false
 *                 wakeUpTime:
 *                   type: string
 *                   example: 07:00
 *                 sleepingTime:
 *                   type: string
 *                   example: 22:00
 *                 lightOutTime:
 *                   type: string
 *                   example: 23:00
 *                 showerTime:
 *                   type: string
 *                   example: 외출 전
 *                 cleaningFrequency:
 *                   type: string
 *                   example: 매일
 *                 itemSharingPreference:
 *                   type: string
 *                   example: 공유해요
 *                 mbti:
 *                   type: string
 *                   example: ISFP
 *                 gamePreferences:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["PC 게임해요", "모바일 게임해요"]
 *                 studyPreferences:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["불 켜고 해요"]
 *                 foodPreferences:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["간단한 간식"]
 *                 sleepingHabits:
 *                   type: array
 *                   items:
 *                     type: string
 *                   example: ["코골이"]
 *       400:
 *         description: 잘못된 요청
 */
router.put("/:id/profile", userController.updateProfile);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: 사용자 정보 조회
 *     description: 사용자 ID를 기반으로 사용자 정보를 조회합니다.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: 조회할 사용자 ID
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: 사용자 조회 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 email:
 *                   type: string
 *                   example: john.doe@example.com
 *                 name:
 *                   type: string
 *                   example: John Doe
 *                 dormitory:
 *                   type: string
 *                   example: A-Block
 *                 department:
 *                   type: string
 *                   example: Computer Science
 *                 phoneNumber:
 *                   type: string
 *                   example: 010-1234-5678
 *                 imageData:
 *                   type: string
 *                   format: binary
 *                   description: "프로필 이미지 파일 (바이너리 데이터)"
 *       404:
 *         description: 사용자 ID를 찾을 수 없음
 */
router.get("/:id", userController.getUserById);

/**
 * @swagger
 * /users/filter:
 *   post:
 *     summary: 필터링된 사용자 목록 조회
 *     description: 사용자가 선택한 조건에 맞는 사용자 목록을 반환합니다.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               dormitoryDuration:
 *                 type: array
 *                 items: { type: string }
 *                 example: ["6개월"]
 *               department:
 *                 type: array
 *                 items: { type: string }
 *                 example: ["Computer Science"]
 *               studentId:
 *                 type: array
 *                 items: { type: string }
 *                 example: ["21학번"]
 *               wakeUpTime:
 *                 type: array
 *                 items: { type: string }
 *                 example: ["07:00", "08:00"]
 *               sleepingTime:
 *                 type: array
 *                 items: { type: string }
 *                 example: ["22:00"]
 *               lightOutTime:
 *                 type: array
 *                 items: { type: string }
 *                 example: ["23:00"]
 *               showerTime:
 *                 type: array
 *                 items: { type: string }
 *                 example: ["외출 전", "귀가 후"]
 *               isSmoking:
 *                 type: array
 *                 items: { type: boolean }
 *                 example: [false]
 *               cleaningFrequency:
 *                 type: array
 *                 items: { type: string }
 *                 example: ["매일 항상 깨끗이"]
 *               itemSharingPreference:
 *                 type: array
 *                 items: { type: string }
 *                 example: ["공유해요"]
 *               lifestyle:
 *                 type: array
 *                 items: { type: string }
 *                 example: ["아침형"]
 *               mbti:
 *                 type: array
 *                 items: { type: string }
 *                 example: ["ISTJ", "INFJ"]
 *               gamePreference:
 *                 type: array
 *                 items: { type: string }
 *                 example: ["PC 게임", "모바일 게임"]
 *               studyPreference:
 *                 type: array
 *                 items: { type: string }
 *                 example: ["불 켜고 해도 돼요"]
 *               foodPreference:
 *                 type: array
 *                 items: { type: string }
 *                 example: ["간단한 간식", "식사"]
 *               sleepingHabits:
 *                 type: array
 *                 items: { type: string }
 *                 example: ["코골이", "잠꼬대"]
 *     responses:
 *       200:
 *         description: 필터링된 사용자 목록 반환
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: John Doe
 *                   dormitoryDuration:
 *                     type: string
 *                     example: 6개월
 *                   department:
 *                     type: string
 *                     example: Computer Science
 *                   studentId:
 *                     type: string
 *                     example: 21학번
 *                   wakeUpTime:
 *                     type: string
 *                     example: 07:00
 *                   sleepingTime:
 *                     type: string
 *                     example: 22:00
 *                   lightOutTime:
 *                     type: string
 *                     example: 23:00
 *                   showerTime:
 *                     type: string
 *                     example: 귀가 후
 *                   isSmoking:
 *                     type: boolean
 *                     example: false
 *                   cleaningFrequency:
 *                     type: string
 *                     example: 매일 항상 깨끗이
 *                   itemSharingPreference:
 *                     type: string
 *                     example: 공유해요
 *                   lifestyle:
 *                     type: string
 *                     example: 아침형
 *                   mbti:
 *                     type: string
 *                     example: [ISTJ]
 *                   gamePreferences:
 *                     type: array
 *                     items: { type: string }
 *                     example: ["PC 게임", "모바일 게임"]
 *                   studyPreferences:
 *                     type: array
 *                     items: { type: string }
 *                     example: ["불 켜고 해도 돼요"]
 *                   foodPreferences:
 *                     type: array
 *                     items: { type: string }
 *                     example: ["간단한 간식", "식사"]
 *                   sleepingHabits:
 *                     type: array
 *                     items: { type: string }
 *                     example: ["코골이", "잠꼬대"]
 *       400:
 *         description: 잘못된 요청
 *       500:
 *         description: 서버 오류
 */
router.post("/filter", userController.filterUsers);
/**
 * @swagger
 * /users/send:
 *   post:
 *     summary: 쪽지 전송
 *     description: 사용자 간 쪽지를 전송합니다.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               senderId:
 *                 type: integer
 *               receiverId:
 *                 type: integer
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: 전송 성공
 *       400:
 *         description: 잘못된 요청
 */
router.post("/send", userController.sendMessage);

/**
 * @swagger
 * /users/received/{userId}:
 *   get:
 *     summary: 수신 쪽지 조회
 *     description: 사용자가 받은은 쪽지를 조회합니다.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: 조회 성공
 *       400:
 *         description: 잘못된 요청
 */
router.get("/received/:userId", userController.getReceivedMessages);

/**
 * @swagger
 * /users/sent/{userId}:
 *   get:
 *     summary: 발신 쪽지 조회
 *     description: 사용자가 보낸 쪽지를 조회합니다.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: 조회 성공
 *       400:
 *         description: 잘못된 요청
 */
router.get("/sent/:userId", userController.getSentMessages);

/**
 * @swagger
 * /users/password-reset:
 *   post:
 *     summary: 비밀번호 재설정 요청
 *     description: 가입된 이메일로 비밀번호 재설정을 위한 인증 코드를 전송합니다.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: example@gmail.com
 *     responses:
 *       200:
 *         description: 인증 코드 전송 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "이메일로 인증 코드를 전송했습니다."
 *       400:
 *         description: 잘못된 요청 또는 등록되지 않은 이메일
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "등록된 이메일이 아닙니다."
 */
router.post("/password-reset", userController.requestPasswordReset);

/**
 * @swagger
 * /users/password-reset/verify:
 *   post:
 *     summary: 비밀번호 재설정
 *     description: 인증 코드 검증 후 새로운 비밀번호로 변경합니다.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: example@gmail.com
 *               code:
 *                 type: string
 *                 example: "123456"
 *               newPassword:
 *                 type: string
 *                 example: "newPassword123!"
 *     responses:
 *       200:
 *         description: 비밀번호 재설정 성공
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "비밀번호가 성공적으로 변경되었습니다."
 *       400:
 *         description: 잘못된 인증 코드 또는 유효하지 않은 요청
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "유효하지 않은 인증 코드입니다."
 */
router.post("/password-reset/verify", userController.verifyCodeAndResetPassword);

export const userRouter = router;
