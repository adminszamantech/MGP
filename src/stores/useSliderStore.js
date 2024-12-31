import { defineStore } from 'pinia';
import axios from '@/axios';

export const useSliderStore = defineStore('useSliderStore', {
    state: () => ({
      sliders: null,
      isLoading: false,
      error: null
    }),
  
    actions: {
      async fetchSlider() {
        this.isLoading = true;
        try {
        const res = await axios.get(`/sliders.json`);
          if(res.status == 200){
            this.sliders = res.data.items;
          }
        } catch (err) {
          this.error = err.message || 'Failed to load data';
        } finally{
          this.isLoading = false;
        }
      },
    },
  });