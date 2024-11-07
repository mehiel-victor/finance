import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="h-full grid grid-cols-2">
      <div className="flex flex-col h-full justify-center p-8 max-w-[550px] mx-auto">
        <div className="flex left justtify-center align-center gap-2 mb-8">
          <Image src="/logo.svg" alt="Finance" width={30} height={30} />
          <h1 className="text-2xl font-black">finance</h1>
        </div>
        <h1 className="text-4xl font-bold mb-3">Bem-vindo</h1>
        <p className="text-muted-foreground mb-8">
          A Finance é sua parceira ideal para uma gestão financeira
          descomplicada! Nossa plataforma, impulsionada por IA, monitora suas
          movimentações e oferece insights personalizados, ajudando você a
          manter o controle do seu orçamento de forma prática e inteligente.
        </p>
        <Button variant={"outline"}>
          <LogInIcon className="mr-2" />
          Entrar ou criar conta
        </Button>
      </div>
      <div className="relative h-full w-full">
        <Image src="/login.png" alt="login" fill className="object-cover" />
      </div>
    </div>
  );
};

export default LoginPage;
