import { defineStore } from 'pinia';
import axios from '@/axios';

export const useGameStore = defineStore('useGameStore', {
    state: () => ({
      games: null,
      isLoading: false,
      error: null
    }),
  
    actions: {
      async fetchGame(categoryId) {
        this.isLoading = true;
        try {
        const res = await axios.get(`/games.json`);
          if(res.status == 200){
            this.games = res.data.items;
          }
        } catch (err) {
          this.error = err.message || 'Failed to load data';
        } finally{
          this.isLoading = false;
        }
      },
    },
  });