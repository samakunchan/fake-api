interface INote {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt?: Date;
}
export default INote;
