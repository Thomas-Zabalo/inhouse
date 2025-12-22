import { z, defineCollection } from "astro:content";

const playerCollection = defineCollection({
    type: 'content',
    schema: z.object({
        nickname: z.string(), 
        fullName: z.string(), 
        team: z.string(),    
        country: z.string(),  
        
        twitter: z.string().optional(),
        playerImg: z.object({
            src: z.string(),
            alt: z.string()
        }),

        title: z.string(),
        description: z.string(),
        date: z.string(),

        rating: z.number().optional(),
    })
});

export const collections = {
    player: playerCollection,
};