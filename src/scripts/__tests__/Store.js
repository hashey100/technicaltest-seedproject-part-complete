import Store from "../Store";
import mockData from "../../../public/db.json";

/**
 * Tests for the following criteria
 * 1. No filters applied should show 11 deals
 * 2. Broadband selected should show 4 broadband deals
 * 3. Broadband & TV selected should show 1 deal
 * 4. Sky selected should show 1 sky deal
 * 5. BT Broadband and TV selected should show 2 deals with BT broadband and tv only
 */

describe("filter", () => {

  let store = new Store();

  /**
   * Initiating beforeEach so I can set the store value with the mockData
   * before any of the tests have ran
  */

  beforeEach(() => {
    store = new Store();
    store.setDeals(mockData.deals)
  });

   /**
   * Running afterEach which will clear the store after a test has ran this follows good practice
  */

  afterEach(() => {
    store.setDeals()
  });

  // Setting up the base tests which covers the functional requirements

  it("should return all deals when no filters applied", () => {
  });

  it("should return 4 broadband deals when broadband selected", () => {
  });

  it("should return 1 deals when broadband and TV selected", () => {
  });

  it("should return 1 sky deal when sky is selected", () => {
  });

  it("should return 2 deals when BT broadband and TV is selected", () => {
  });

});
