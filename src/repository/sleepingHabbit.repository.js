import { prisma } from "../../db.config.js";

export const sleepingHabitRepository = {
	createHabit: (data) => prisma.sleepingHabit.create({ data }),
	findHabitsByUserId: (userId) => prisma.sleepingHabit.findMany({ where: { userId } }),
	deleteHabit: (id) => prisma.sleepingHabit.delete({ where: { id } }),
};
