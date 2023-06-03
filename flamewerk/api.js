
export const useAPI = defineStore('api', {
  state: () => ({

      //DEMO API FROM THE OFFICIAL GHOST TEAM
      ghost:{ 
        url: 'https://content.ghost.io',
        key: '886ce8470124821e8ff335ff74',
        version: "v5.0",
        filter: "Flamewerk"
      }

  })
})
