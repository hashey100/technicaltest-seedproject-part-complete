import Observable from "./Observable";

class Store extends Observable {
  constructor() {
    super();
    this.state = {
      deals: [],
      productFilters: [],
      providerFilter: null
    };
  }

  get deals() {
    return this.filter();
  }

  filter() {
    let productFilters = this.state.productFilters;
    let providerFilters = this.state.providerFilter;
    let deals = this.state.deals;

    // Verify the array exists before filtering data
    if (productFilters.length != 0) {
      // Filter function checking the deals and making sure Iphone is not included
        deals = deals.filter((deal) => {
          const results = deal.productTypes.filter(type => type !== 'Phone');
          // Mapping the results and conditionality filtering out broadband
          const filteredResults = results.map((e) => {
            return e.toLowerCase().indexOf('broadband') > -1 ? 'broadband' : e.toLowerCase();
          });
          // Checking if the sorted results are the same
          return filteredResults.sort().join(',') === productFilters.join(',');
        });
    }

    // Verify that the providerFilter is valid before results are filtered again
    if (providerFilters != null) {
      // Check the deals provider ID against the providerFilter which has been selected
      deals = deals.filter((deal) => deal.provider.id === providerFilters);
    }

    return deals;
  }

  setDeals(data) {
    this.state.deals = data;
    this.notify(this.state);
  }

  setProductFilter(value) {
    const filter = value.trim().toLowerCase();
    const index = this.state.productFilters.indexOf(filter);
    if (index === -1) {
      this.state.productFilters.push(filter);
    } else {
      this.state.productFilters.splice(index, 1);
    }
    this.notify(this.state);
  }

  setProviderFilter(value = null) {
    this.state.providerFilter = value;
    this.notify(this.state);
  }
}

export default Store;
