export interface Micropost {
  id: number;
  content: string;

  createdAt: number;
  isMyPost?: boolean;
}