-- Inserting categories

insert into categories (id_category, url_image, description, title)
values (default, "https://images-ext-1.discordapp.net/external/gHx4-Q7GNbORK8r-5tNpHf-p01AlksaUX_Zq1GAHQrI/https/www.chevrolet.com.pa/content/dam/chevrolet/na/mx/es/index/cars/2019-spark/colorizer/01-images/2019-spark-negro-onix-imwidth%3D1200.png", "Un auto compacto es un vehículo de tamaño medio con una carrocería dividida en 2 volúmenes, por un lado el motor y, por otro el habitáculo y el maletero. Este segmento de coches se encuentra entre los coches utilitarios y las berlinas", "Compactos");

insert into categories (id_category, url_image, description, title)
values (default, "https://images-ext-1.discordapp.net/external/PFCFO05cuM7E9P96sEbR256FF1Ftsk1Y-mG7Zj2nKd4/https/www.pngmart.com/files/4/Mazda-Car-PNG-Pic.png", "Un auto intermedio es un vehículo de tamaño promedio de gama media. Este segmento de coches se encuentra entre los coches familiares", "Intermedio");

insert into categories (id_category, url_image, description, title)
values (default, "https://www.pngall.com/wp-content/uploads/5/White-Pickup-Truck-PNG-Free-Download.png", "Camioneta es un automóvil menor que el camión, ​ empleado generalmente para el transporte de elementos, se aplica a distintos tipos de automóviles, en concreto pickups, vehículos todoterreno, furgonetas, monovolúmenes, y familiares", "Camionetas");

insert into categories (id_category, url_image, description, title)
values (default, "https://cdn.pixabay.com/photo/2021/10/21/23/42/audi-6730693_960_720.png", "Un vehículo premium se destaca por su alta calidad de materiales, ajuste y ejecución. No valen plásticos duros, franquicias heterogéneas, ruidos parásitos ni errores conceptuales", "Premium");

-- Inserting cities

insert into cities (id, city_name, country_name, province_name)
values (default, "Cali", "Colombia", "Valle");

insert into cities (id, city_name, country_name, province_name)
values (default, "Nariño", "Colombia", "Pasto");

insert into cities (id, city_name, country_name, province_name)
values (default, "Bogotá", "Colombia", "Cundinamarca");

insert into cities (id, city_name, country_name, province_name)
values (default, "Córdoba", "Argentina", "Córdoba");

insert into cities (id, city_name, country_name, province_name)
values (default, "CABA", "Argentina", "Buenos Aires");


-- Inserting characateristics

-- 1
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons-png.flaticon.com/512/7568/7568088.png", "cuatro puertas");

-- 2
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons-png.flaticon.com/512/3347/3347818.png", "aire acondicionado");

-- 3
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons-png.flaticon.com/512/4379/4379727.png", "Toyota");

-- 4
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons-png.flaticon.com/512/5035/5035167.png", "Ranger");

-- 5
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons-png.flaticon.com/512/4744/4744824.png", "Año 2023");

-- 6
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons.flaticon.com/png/512/1752/premium/1752352.png?token=exp=1661206910~hmac=bba0e988805a9765975e0f79c6d2e1fb", "Negro");

-- 7
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons-png.flaticon.com/512/638/638367.png", "Diésel");

-- 8
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons.flaticon.com/png/512/2260/premium/2260102.png?token=exp=1661213706~hmac=634a2f23b51de136c2ddfff03c0b3987", "Automático");

-- 9
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons.flaticon.com/png/512/2430/premium/2430185.png?token=exp=1661213545~hmac=6995eb08815379db456e66cd789e328f", "3200");

-- 10
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons-png.flaticon.com/512/2/2204.png", "123200");

-- 11
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons-png.flaticon.com/512/1464/1464627.png", "5");

-- 12
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons.flaticon.com/png/512/755/premium/755160.png?token=exp=1661207024~hmac=57781e9f7151e541e7bcd04bdb22ca84", "cinco puertas");

-- 13
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons.flaticon.com/png/512/3042/premium/3042711.png?token=exp=1661207279~hmac=f9f0f05160306e20e22205fca4621bca", "Audi");

-- 14
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons-png.flaticon.com/512/5035/5035167.png", "A3");

-- 15
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons-png.flaticon.com/512/4744/4744824.png", "Año 2022");

-- 16
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons.flaticon.com/png/512/1752/premium/1752352.png?token=exp=1661206910~hmac=bba0e988805a9765975e0f79c6d2e1fb", "Gris");

-- 17
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons-png.flaticon.com/512/638/638367.png", "Gasolina y gas");

-- 18
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons-png.flaticon.com/512/2/2204.png", "120000");

-- 19
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons-png.flaticon.com/512/3936/3936663.png", "Chevrolet");

-- 20
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons-png.flaticon.com/512/5035/5035167.png", "Spark");

-- 21
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons-png.flaticon.com/512/4744/4744824.png", "Año 2016");

-- 22
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons.flaticon.com/png/512/1752/premium/1752352.png?token=exp=1661206910~hmac=bba0e988805a9765975e0f79c6d2e1fb", "Blanco");

-- 23
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons-png.flaticon.com/512/638/638367.png", "Gasolina");

-- 24
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons-png.flaticon.com/512/204/204096.png", "Mecanica");

-- 25
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons-png.flaticon.com/512/2061/2061866.png", "1.0");

-- 26
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons-png.flaticon.com/512/2/2204.png", "76207");

-- 27
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons-png.flaticon.com/512/1464/1464627.png", "2");

-- 28
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons-png.flaticon.com/512/3936/3936663.png", "Ford");

-- 29
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons-png.flaticon.com/512/5035/5035167.png", "Mondeo");

-- 30
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons-png.flaticon.com/512/4744/4744824.png", "2018");

-- 31
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons.flaticon.com/png/512/1752/premium/1752352.png?token=exp=1661206910~hmac=bba0e988805a9765975e0f79c6d2e1fb", "Gris");

-- 32
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons-png.flaticon.com/512/638/638367.png", "Nafta");

-- 33
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons-png.flaticon.com/512/2061/2061866.png", "2.0");

-- 34
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons-png.flaticon.com/512/2061/2061866.png", "17800");

-- 35
insert into characteristics (id, icon, name)
values (default, "https://cdn-icons-png.flaticon.com/512/2061/2061866.png", "2.0");


-- inserting makes

insert into makes (id, name)
values (default, "Ford");

insert into makes (id, name)
values (default, "Audi");

insert into makes (id, name)
values (default, "Chevrolet");

insert into makes (id, name)
values (default, "Toyota");


-- inserting models

insert into models (id, year)
values (default, "2016");

insert into models (id, year)
values (default, "2017");

insert into models (id, year)
values (default, "2018");

insert into models (id, year)
values (default, "2019");

insert into models (id, year)
values (default, "2020");

insert into models (id, year)
values (default, "2021");

insert into models (id, year)
values (default, "2022");

insert into models (id, year)
values (default, "2023");

-- inserting vehicles

insert into vehicles (id, range_name, description, categories_id, city_id, make_id, model_id)
values (default, "Ford Ranger", "CONTROL DE VELOCIDAD ADAPTATIVO Mide la distancia y velocidad de los vehículos que se encuentran en frente.", 1, 2, 1, 8);

insert into vehicles (id, range_name, description, categories_id, city_id, make_id, model_id)
values (default, "Audi A3", "Tecnologías innovadoras, El Audi A3 Sportback cuenta con los últimos avances en asistencia a la conducción, ayudándote en situaciones de peligro y aumentando el confort tanto en viajes largos como en el tráfico urbano del día a día.", 4, 1, 2, 7);

insert into vehicles (id, range_name, description, categories_id, city_id, make_id, model_id)
values (default, "Chevrolete Spark", "Tecnologías innovadoras, El Audi A3 Sportback cuenta con los últimos avances en asistencia a la conducción, ayudándote en situaciones de peligro y aumentando el confort tanto en viajes largos como en el tráfico urbano del día a día.", 1, 2, 3, 1);

insert into vehicles (id, range_name, description, categories_id, city_id, make_id, model_id)
values (default, "Ford Mondeo", "FORD MONDEO TITANIUM 2018 USADO MUY BUEN ESTADO Somos Hauswagen, más de 25 años avalan nuestra trayectoria. Somos la red de concesionarias Volkswagen más importante del País. Empresa de garantía y excelencia", 2, 4, 1, 3);


-- insering characteristics
-- vehicle 1
insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (1, 1);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (1, 2);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (1, 3);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (1, 4);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (1, 5);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (1, 6);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (1, 7);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (1, 8);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (1, 9);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (1, 10);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (1, 11);

-- vehicle 2

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (2, 12);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (2, 2);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (2, 13);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (2, 14);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (2, 15);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (2, 16);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (2, 17);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (2, 8);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (2, 9);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (2, 18);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (2, 11);

-- vehicle 3

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (3, 12);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (3, 2);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (3, 19);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (3, 20);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (3, 21);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (3, 22);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (3, 23);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (3, 24);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (3, 25);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (3, 26);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (3, 27);


-- vehicle 4

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (4, 1);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (4, 2);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (4, 328);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (4, 29);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (4, 30);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (4, 31);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (4, 32);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (4, 8);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (4, 33);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (4, 34);

insert into  vehicle_characteristic (vehicle_id, characteristic_id)
values (4, 11);


-- inserting images

-- vehicle 1

insert into  images (id, title, url, vehicle_id)
values (default, "Main", "https://i0.wp.com/carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/Ford-Ranger-dual-cab_1.png?w=1200&ssl=1", 1);

insert into  images (id, title, url, vehicle_id)
values (default, "Ford", "https://http2.mlstatic.com/D_NQ_NP_753828-MCO32074027707_092019-O.webp", 1);

insert into  images (id, title, url, vehicle_id)
values (default, "Ford", "https://http2.mlstatic.com/D_NQ_NP_669830-MCO32074039073_092019-O.webp", 1);

insert into  images (id, title, url, vehicle_id)
values (default, "Ford", "https://http2.mlstatic.com/D_NQ_NP_888877-MCO32074007978_092019-O.webp", 1);

insert into  images (id, title, url, vehicle_id)
values (default, "Ford", "https://http2.mlstatic.com/D_NQ_NP_771660-MCO32074018331_092019-O.webp", 1);

insert into  images (id, title, url, vehicle_id)
values (default, "Ford", "https://http2.mlstatic.com/D_NQ_NP_695539-MCO32074030684_092019-O.webp", 1);

insert into  images (id, title, url, vehicle_id)
values (default, "Ford", "https://http2.mlstatic.com/D_NQ_NP_642826-MCO32074014382_092019-O.webp", 1);

insert into  images (id, title, url, vehicle_id)
values (default, "Ford", "https://http2.mlstatic.com/D_NQ_NP_863304-MCO32074041558_092019-O.webp", 1);

-- vehicle 2

insert into  images (id, title, url, vehicle_id)
values (default, "Main", "https://tmdcobreq.com.br/wp-content/uploads/2018/09/N-2000-A3-IMAGEM-CARRO.png", 2);

insert into  images (id, title, url, vehicle_id)
values (default, "Audi", "https://http2.mlstatic.com/D_NQ_NP_720372-MCO51111459346_082022-O.webp", 2);

insert into  images (id, title, url, vehicle_id)
values (default, "https://http2.mlstatic.com/D_NQ_NP_873591-MCO49935956000_052022-O.webp", 2);

insert into  images (id, title, url, vehicle_id)
values (default, "Audi", "https://http2.mlstatic.com/D_NQ_NP_937557-MCO51111482120_082022-O.webp", 2);

insert into  images (id, title, url, vehicle_id)
values (default, "Audi", "https://http2.mlstatic.com/D_NQ_NP_661833-MCO51111455358_082022-O.webp", 2);

insert into  images (id, title, url, vehicle_id)
values (default, "Audi", "https://http2.mlstatic.com/D_NQ_NP_971812-MCO51111310877_082022-O.webp", 2);

insert into  images (id, title, url, vehicle_id)
values (default, "Audi", "https://http2.mlstatic.com/D_NQ_NP_737790-MCO49936236004_052022-O.webp", 2);


-- vehicle 3

insert into  images (id, title, url, vehicle_id)
values (default, "Main", "https://s3.pagegear.co/15/contents/posventa/kits_instalados/logo_vectorizado_rarecurso_2.png", 3);

insert into  images (id, title, url, vehicle_id)
values (default, "spark", "https://http2.mlstatic.com/D_NQ_NP_808837-MCO51177798071_082022-O.webp", 3);

insert into  images (id, title, url, vehicle_id)
values (default, "spark", "https://http2.mlstatic.com/D_NQ_NP_795498-MCO51177699788_082022-O.webp", 3);

insert into  images (id, title, url, vehicle_id)
values (default, "spark", "https://http2.mlstatic.com/D_NQ_NP_904993-MCO51177781194_082022-O.webp", 3);

insert into  images (id, title, url, vehicle_id)
values (default, "spark", "https://http2.mlstatic.com/D_NQ_NP_629046-MCO51177703694_082022-O.webp", 3);

insert into  images (id, title, url, vehicle_id)
values (default, "spark", "https://http2.mlstatic.com/D_NQ_NP_643931-MCO51177741507_082022-O.webp", 3);

insert into  images (id, title, url, vehicle_id)
values (default, "spark", "https://http2.mlstatic.com/D_NQ_NP_745642-MCO51177695858_082022-O.webp", 3);

-- vehicle 4

insert into  images (id, title, url, vehicle_id)
values (default, "Main", "https://www.pngplay.com/wp-content/uploads/13/Ford-Mondeo-PNG-Clipart-Background.png", 4);

insert into  images (id, title, url, vehicle_id)
values (default, "Ford", "https://http2.mlstatic.com/D_NQ_NP_916826-MLA51089985466_082022-O.webp", 4);

insert into  images (id, title, url, vehicle_id)
values (default, "Ford", "https://http2.mlstatic.com/D_NQ_NP_716942-MLA51089930734_082022-O.webp", 4);

insert into  images (id, title, url, vehicle_id)
values (default, "Ford", "https://http2.mlstatic.com/D_NQ_NP_890573-MLA51090032230_082022-O.webp", 4);

insert into  images (id, title, url, vehicle_id)
values (default, "Ford", "https://http2.mlstatic.com/D_NQ_NP_803710-MLA51090031258_082022-O.webp", 4);

insert into  images (id, title, url, vehicle_id)
values (default, "Ford", "https://http2.mlstatic.com/D_NQ_NP_685834-MLA51089983474_082022-O.webp", 4);

insert into  images (id, title, url, vehicle_id)
values (default, "Ford", "https://http2.mlstatic.com/D_NQ_NP_749992-MLA51090047159_082022-O.webp", 4);

insert into  images (id, title, url, vehicle_id)
values (default, "Ford", "https://http2.mlstatic.com/D_NQ_NP_2X_638596-MLA51090042187_082022-F.webp", 4);

insert into  images (id, title, url, vehicle_id)
values (default, "Ford", "https://http2.mlstatic.com/D_NQ_NP_929571-MLA51090035246_082022-O.webp", 4);

insert into  images (id, title, url, vehicle_id)
values (default, "Ford", "https://http2.mlstatic.com/D_NQ_NP_2X_899520-MLA51090039232_082022-F.webp", 4);

insert into  images (id, title, url, vehicle_id)
values (default, "Ford", "https://http2.mlstatic.com/D_NQ_NP_2X_917143-MLA51089819999_082022-F.webp", 4);
