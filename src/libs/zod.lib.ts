import { z } from 'zod';

export const signupFormSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: '성은 필수 입력 항목입니다.' })
    .trim(),
  lastName: z
    .string()
    .min(1, { message: '이름은 필수 입력 항목입니다.' })
    .trim(),
  name: z
    .string()
    .min(1, { message: '사용자 이름은 필수 입력 항목입니다.' })
    .regex(/^[\p{L}0-9_]+$/u, {
      message: '사용자 이름은 문자, 숫자 및 밑줄만 사용할 수 있습니다.',
    })
    .trim(),
  email: z
    .string()
    .min(1, { message: '이메일은 필수 입력 항목입니다.' })
    .email({ message: '유효한 이메일 주소를 입력해 주세요.' })
    .trim(),
  password: z
    .string()
    .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' })
    .regex(/[a-zA-Z]/, {
      message: '비밀번호는 최소 한 개의 문자를 포함해야 합니다.',
    })
    .regex(/[0-9]/, {
      message: '비밀번호는 최소 한 개의 숫자를 포함해야 합니다.',
    })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: '비밀번호는 문자, 숫자 및 밑줄만 사용할 수 있습니다.',
    })
    .trim(),
});
