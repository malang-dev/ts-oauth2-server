import { ExtraAccessTokenFieldArgs, JwtService } from "@malang-dev/oauth2-server";

export class MyCustomJwtService extends JwtService {
  extraTokenFields({ user, client }: ExtraAccessTokenFieldArgs) {
    return {
      email: user?.email,
      client: client.name,
    };
  }
}
