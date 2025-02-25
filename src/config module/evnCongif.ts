import { ConfigModule } from "@nestjs/config";

export const envConfigMudule = ConfigModule.forRoot({
    isGlobal : true,
    envFilePath : ".local.env",
    
    // envFilePath : ".prod.env"
}) 