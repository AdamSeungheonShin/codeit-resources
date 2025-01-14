import { ICategory } from "./categoryType";
import { IUser } from "./userType";

export const ItemStatus = ["available", "in-use", "unavailable"] as const; // 예약가능, 대여중, 사용불가
export type TItemStatus = (typeof ItemStatus)[number];

export const ItemType = ["room", "seat", "equipment"] as const;
export type TItemType = (typeof ItemType)[number];

export interface TBaseItem {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  status: TItemStatus;
  description?: string;
  imageUrl?: string; // Optional
}

export interface IRoom extends TBaseItem {
  itemType: "room";
  category: ICategory;
  location?: string;
  capacity?: number;
}

export interface ISeat extends TBaseItem {
  itemType: "seat";
  user?: IUser;
}

export interface IEquipment extends TBaseItem {
  itemType: "equipment";
  category: ICategory;
}
