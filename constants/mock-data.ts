import { faker } from "@faker-js/faker";

export type MockDataType = {
  id: number;
  title: string;
  description: string;
  photo: string;
  created_at: Date;
};

// 객체 100개 생성
export const mockDataList: Readonly<MockDataType[]> = Array.from(
  { length: 100 },
  (_, index) =>
    Object.freeze({
      id: index + 1, // id가 1부터 시작하도록 설정
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      photo: faker.image.urlPicsumPhotos(),
      created_at: new Date(),
    })
);
