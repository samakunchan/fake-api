import { Injectable } from '@nestjs/common';
import { IHome } from './core/interfaces/home.interface';

@Injectable()
export class AppService {
  getInfos(): IHome {
    return {
      titre: `Fake API v${process.env.npm_package_version}`,
      framework: `NestJS`,
      description: `C'est une API dockerisé qui servira à tout les projets/tests dont j'ai besoin dans un personnel et professionnel.`,
      environnement: process.env.APP_ENV,
      version: process.env.npm_package_version,
      auteur: `Samakunchan`,
      routes: [],
    };
  }
}
