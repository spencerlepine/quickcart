import currentUser from 'currentUser';

export default class FirestoreMock {
  constructor() {
    // mocked methods that return the class
    this.mockCollection = jest.fn(() => this);
    this.mockWhere = jest.fn(() => this);
    this.mockOrderBy = jest.fn(() => this);

    // methods that return promises
    this.mockAdd = jest.fn(() => Promise.resolve(this._mockAddReturn));
    this.mockGet = jest.fn(() => Promise.resolve(this._mockGetReturn));

    // methods that accepts callbacks
    this.mockOnSnaptshot = jest.fn((success, error) => success(this._mockOnSnaptshotSuccess));

    // return values
    this._mockAddReturn = null;
    this._mockGetReturn = null;
    this._mockOnSnaptshotSuccess = null;
  }

  collection(c) {
    return this.mockCollection(c);
  }

  where(...args) {
    return this.mockWhere(...args);
  }

  orderBy(...args) {
    return this.mockOrderBy(...args);
  }

  add(a) {
    return this.mockAdd(a);
  }

  get() {
    return this.mockGet();
  }

  onSnapshot(success, error) {
    return this.mockOnSnaptshot(success, error);
  }

  set mockAddReturn(val) {
    this._mockAddReturn = val;
  }

  set mockGetReturn(val) {
    this._mockGetReturn = val;
  }

  set mockOnSnaptshotSuccess(val) {
    this._mockOnSnaptshotSuccess = val;
  }

  reset() {
    // reset all the mocked returns
    this._mockAddReturn = null;
    this._mockGetReturn = null;
    this._mockOnSnaptshotSuccess = null;

    // reset all the mocked functions
    this.mockCollection.mockClear();
    this.mockWhere.mockClear();
    this.mockOrderBy.mockClear();
    this.mockAdd.mockClear();
    this.mockGet.mockClear();
  }
}

// Need to mock firebase? (try npm firebase-mock?)
// https://stackoverflow.com/questions/52043886/how-do-you-mock-firebase-firestore-methods-using-jest
// https://stackoverflow.com/questions/61686830/error-mocking-firebase-admin-in-jest-typeerror-admin-firestore-is-not-a-funct

jest.mock('firebase/app', () => ({
  __esModule: true,
  default: {
    initializeApp: () => ({
      db: () => new FirestoreMock(),
      auth: () => ({
        onAuthStateChanged: () => { },
        currentUser,
      }),
    }),
    storage: () => { },
    firestore: () => { },
  },
}));

jest.mock('config/firebase', () => ({
  __esModule: true,
  default: {
    auth: {
      currentUser,
    },
  },
}));