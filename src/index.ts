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
        
        /*
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
        */

        const photoRepository = AppDataSource.getRepository(Photo);
        const allPhotos = await photoRepository.find();
        console.log("All photos from the db: ", allPhotos);

        const firstPhoto = await photoRepository.findOneBy({
            id: 1,
        });
        console.log("First photo from the db: ", firstPhoto);

        const meAndBearsPhoto = await photoRepository.findOneBy({
            name: "Me and Bears",
        });
        console.log("Me and Bears photo from the db: ", meAndBearsPhoto);

        const allViewedPhotos = await photoRepository.findBy({ view: 1 });
        console.log("All viewed photos: ", allViewedPhotos);

        const allPublishedPhotos = await photoRepository.findBy({ isPublished: true });
        console.log("All published photos: ", allPublishedPhotos);

        const [photos, photosCount] = await photoRepository.findAndCount();
        console.log("All photos: ", photos);
        console.log("Photos count: ", photosCount);
}

main().catch(err => console.error(err));
    