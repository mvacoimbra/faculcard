import Image from 'next/image';

export default function Home() {
  return (
    <main className="text-blue-950">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center mt-5 p-5 gap-5">
        <Image
          src={`https://res.cloudinary.com/mvacoimbra/image/upload/v1704568854/faculcard/Pasted-20240106-161206_1_g3gstn.png`}
          height={500}
          width={500}
          alt="unip-logo"
          className="w-[90%]"
        />
        <div className="w-full">
          <div className="border-b-[1px] border-blue-950 text-center mb-4 font-bold">
            <h2>Dados do aluno</h2>
          </div>
          <div className="grid grid-cols-3 max-sm:text-[10px] border-b-[1px] border-blue-950 pb-3">
            <ul className="flex flex-col font-bold">
              <li>Matrícula:</li>
              <li>Nome:</li>
              <li>RG:</li>
              <li>Nascimento:</li>
              <li>Curso:</li>
              <li>Unidade:</li>
              <li>Carteirinha:</li>
              <li>Validade:</li>
            </ul>
            <ul className="flex flex-col col-span-2 w-fit whitespace-nowrap">
              <li>2231074</li>
              <li>MARCOS VINICIUS DE ARAUJO COIMBRA</li>
              <li>6461402</li>
              <li>27/11/1999</li>
              <li>43701 - CIÊNCIA DA COMPUTAÇÃO</li>
              <li>9115 - ANÁPOLIS</li>
              <li>VÁLIDA</li>
              <li>JUN/2024</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
