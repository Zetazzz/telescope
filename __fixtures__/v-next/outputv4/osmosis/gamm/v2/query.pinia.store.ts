import { LCDClient } from "@osmonauts/lcd";
import { useEndpoint } from "../../../pinia-endpoint";
import { QuerySpotPriceRequest, QuerySpotPriceRequestSDKType, QuerySpotPriceResponse, QuerySpotPriceResponseSDKType } from "./query";
import { defineStore } from "pinia";
import { LCDQueryClient } from "./query.lcd";
export const usePiniaStore = defineStore('osmosis/gamm/v2/query.proto', {
  state: () => {
    return {
      spotPrice: ({} as QuerySpotPriceResponseSDKType)
    };
  },
  getters: {
    lcdClient() {
      const requestClient = useEndpoint().restClient;
      return new LCDQueryClient({ requestClient });
    }
  },
  actions: {
    async fetchSpotPrice(param : QuerySpotPriceRequestSDKType) {
      this.spotPrice = await this.lcdClient.spotPrice(param);
      return this.spotPrice;
    }
  }
});