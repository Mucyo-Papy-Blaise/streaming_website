interface IUser {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    allMix?: mongoose.Schema.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
  }

 