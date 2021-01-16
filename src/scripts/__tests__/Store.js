import Store from "../Store";
import mockData from "../../../public/db.json";

/**
 * Tests for the following criteria
 * 1. No filters applied should show 11 deals
 * 2. Broadband selected should show 4 broadband deals
 * 3. Broadband & TV selected should show 4 deal
 * 4. Broadband & Mobile should show 1 deal
 * 5. Sky selected should show 1 sky deal
 * 6. BT Broadband and TV selected should show 2 deals
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

  it("should return 11 deals when no filters applied", () => {
    // Check if 11 deals are returned if nothing has been selected
    expect(store.deals.length).toBe(11);
    // Check the data when nothing has been selected
    expect(store.deals).toEqual(mockData.deals);
  });

  it("should return 4 broadband deals when broadband selected", () => {
    // Set the product filter to be broadband
    store.setProductFilter('broadband');
    // Check if the store contains 4 deals
    expect(store.deals.length).toBe(4);
    // Checking if the ID's are the broadband ID's when selected
    expect(store.deals[0].id).toEqual(6158);
    expect(store.deals[1].id).toEqual(4359);
    expect(store.deals[2].id).toEqual(4371);
    expect(store.deals[3].id).toEqual(5459);
  });

  it("should return 4 deal when broadband and TV selected", () => {
    // Set the filter to broadband and mobile
    store.setProductFilter('broadband');
    store.setProductFilter('tv');
    // Check if the store contains 4 deals
    expect(store.deals.length).toBe(4);
    // Check values if the ID's match what's selected
    expect(store.deals[0].id).toEqual(6074);
    expect(store.deals[1].id).toEqual(5738);
    expect(store.deals[2].id).toEqual(6165);
    expect(store.deals[3].id).toEqual(6468);
  });

  it("should return 1 deal when broadband and Mobile selected", () => {
    // Set the filter to broadband and mobile
    store.setProductFilter('broadband');
    store.setProductFilter('mobile');
    // Check if the store contains 4 deals
    expect(store.deals.length).toBe(1);
    // Check values if the ID's match what's selected
    expect(store.deals[0].id).toEqual(4276);
  });

  it("should return 1 sky deal when sky is selected", () => {
    // Set the providerFilter to 1 which is the ID for sky
    store.setProviderFilter(1);
    // Check if the store contains 1 deals
    expect(store.deals.length).toBe(1);
    expect(store.deals[0].id).toEqual(6468);
  });

  it("should return 2 deals when BT broadband and TV is selected", () => {
    store.setProductFilter('broadband');
    store.setProductFilter('tv');
    store.setProviderFilter(3);
    // Check if the store contains 2 deals
    expect(store.deals.length).toBe(2);
    expect(store.deals[0].id).toEqual(6074);
    expect(store.deals[1].id).toEqual(5738);
  });

});
