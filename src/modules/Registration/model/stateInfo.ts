import { StateInfo} from "./states";

export const AccountTypeInfo: StateInfo = {
  points: [{
    name: 'Account Type',
    point: 'active'
  }, {
    name: 'Personal details',
    point: 'standard'
  }, {
    name: 'Additional Info',
    point: 'standard'
  }, {
    name: 'Confirmation',
    point: 'standard'
  }],
  title: 'Sign Up'
}

export const PersonalDetailsInfo: StateInfo = {
  points: [{
    name: 'Account Type',
    point: 'done'
  }, {
    name: 'Personal details',
    point: 'active'
  }, {
    name: 'Additional Info',
    point: 'standard'
  }, {
    name: 'Confirmation',
    point: 'standard'
  }],
  title: 'Personal details'
}

export const AdditionalInfoInfo: StateInfo = {
  points: [{
    name: 'Account Type',
    point: 'done'
  }, {
    name: 'Personal details',
    point: 'done'
  }, {
    name: 'Additional Info',
    point: 'active'
  }, {
    name: 'Confirmation',
    point: 'standard'
  }],
  title: 'Additional Info'
}

export const ConfirmationInfo: StateInfo = {
  points: [{
    name: 'Account Type',
    point: 'done'
  }, {
    name: 'Personal details',
    point: 'done'
  }, {
    name: 'Additional Info',
    point: 'done'
  }, {
    name: 'Confirmation',
    point: 'active'
  }],
  title: 'Confirmation'
}