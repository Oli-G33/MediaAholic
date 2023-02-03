import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: 'string',
      required: true,
      min: 2,
      max: 20
    },
    lastName: {
      type: 'string',
      required: true,
      min: 2,
      max: 20
    },
    email: {
      type: 'string',
      required: true,
      max: 20,
      unique: true
    },
    password: {
      type: 'string',
      required: true,
      min: 8
    },
    picturePath: {
      type: 'string',
      default: ''
    },
    friends: {
      type: 'array',
      default: []
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

export default User;
