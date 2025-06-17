import { AppDataSource } from "./data-source";
import { Photo } from "./entities/user";

async function main() {
    await AppDataSource.initialize()
        .then (() => {
            console.log("Data Source has been initialized!");
        })
        .catch ((err) => {
            console.error("Error during Data Source initialization:", err);
        })
    
    const photo = new Photo ();
        photo.name = "Me and Bears";
        photo.description = "I am near polar bears";
        photo.filename = "photo-with-bears.jpg";
        photo.view = 10;
        photo.isPublished = true;
        
        const photoRepository = AppDataSource.getRepository(Photo);
        await photoRepository.save(photo);
        console.log("Photo has been saved");
        const savedPhotos = await photoRepository.find();   
        console.log("All photos from the db: ", savedPhotos);
}

main().catch(err => console.error(err));
    