import Link from "next/link";
export default function linuxWindowsDocker() {
  const anotação = `### Tutorial oficial: 
  https://docs.microsoft.com/en-us/windows/wsl/install-win10
  
  ### Passo 1 (PowerShell Admin): 
  dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
  
  ### Passo 2 (PowerShell Admin):
  dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
  
  ### Passo 3
  REINICIE O COMPUTADOR
  
  ### Passo 4 (Download the Linux kernel update package):
  https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi
  
  ### Passo 5 (PowerShell Admin):
  wsl --set-default-version 2
  
  ### Passo 7 (Instale o docker):
  Tutorial: https://docs.docker.com/docker-for-windows/install/
  `;
  return (
    <pre className=" leading-5">
      <div className="flex justify-end ">
        <Link className="p-2 bg-zinc-600" href="/notes">
          Voltar
        </Link>
      </div>

      {anotação}
    </pre>
  );
}
