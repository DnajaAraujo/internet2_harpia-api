import {Router} from 'express';

import multer from 'multer';
import multerConfig from '../../infrastructure/config/multer'

import {PostagemController} from '../controllers/PostagemController';
import {Postagem} from '../../domain/entities/postagem';

const routerPost = Router();

// ----------------------------------------------------------------------------------------
// Rotas das postagens
// Obter todas as postagens
routerPost.get('/getAll', PostagemController.index);


// Rota que lista a imagem de um post. Esta rota é somente de teste. Acredito que ela não deve ficar aqui
routerPost.get('/imagem', PostagemController.getImg)

routerPost.get('/:id/img', PostagemController.getImagePost)

// Obter uma postagem
routerPost.get('/:id', PostagemController.getPostagem);


// Criar postagem
routerPost.post('/criar',multer(multerConfig).single("file") , PostagemController.create);


// Alterar postagem
routerPost.put('/alterar/:id', PostagemController.update)


// Deletar postagem
routerPost.delete('/deletar/:id', PostagemController.delete)


export {routerPost};

