import { Download, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

export function About() {
  const cvUrl = 'https://drive.google.com/uc?export=download&id=15OUB5MQGvJ7qz1YF-dVOnw6je1EVvuoJ';
  const cvViewUrl = 'https://drive.google.com/file/d/15OUB5MQGvJ7qz1YF-dVOnw6je1EVvuoJ/view';

  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4">Sobre mi</h2>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 mb-8">
          <div className="prose prose-gray max-w-none">
            <p className="mb-4">
              Estela Penadés Gandia, nascuda en Ontinyent (València) en 1976, és pedagoga i docent especialista en Pedagogia Terapèutica al Centre Públic "La Solana" de la seua localitat. En aquest context desenvolupa diferents projectes artístics amb finalitat terapèutica adreçats a alumnat amb Necessitats Específiques de Suport Educatiu derivades de situacions de neurodivergència. Actualment cursa el Grau de Belles Arts a la Universitat Politècnica de València, on centra la seua línia d'investigació en les aplicacions terapèutiques i expressives de les arts visuals en l'àmbit de l'educació inclusiva.
            </p>
            
            <p className="mb-4">
              Mitjançant diferents tècniques plàstiques i llenguatges artístics (pintura, modelatge, collage, construccions tridimensionals, entre altres), ofereix als xiquets i xiquetes un espai segur d'expressió, regulació i creixement personal. Així mateix, amb instal·lacions i provocacions, la seua tasca busca qüestionar i resignificar la funció de l'art en les escoles, proposant alternatives a les manualitats que tradicionalment es realitzen en els centres educatius d'educació infantil i primària. L'objectiu central d'aquesta proposta no és l'assoliment d'un producte estètic, sinó la generació de canals per a l'expressió d'emocions, l'estimulació de la creativitat, l'autoconeixement i la construcció de vincles interpersonals.
            </p>
            
            <p className="mb-0">
              Al llarg de la seua carrera, ha participat en diverses exposicions anuals col·lectives de l'acadèmia "Dibuix" en el Centre Cultural del Palau dels Barons de Santa Bàrbara d'Ontinyent. A més, forma part de les activitats d'innova@plàstica, integrades en el projecte innov@ARTS, un projecte d'Innovació i Inclusió Educativa impulsat per la Conselleria d'Educació de la Comunitat Valenciana, que pretén fomentar la creativitat i els processos artístics i culturals a l'alumnat dels centres d'Educació Primària i d'Educació Especial.
            </p>
          </div>
        </div>

        {/* CV Download Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <h3 className="mb-4">Currículum Vitae</h3>
          <p className="text-gray-600 mb-6">
            Descarrega el meu CV complet per a més informació sobre la meua trajectòria professional i acadèmica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <a href={cvUrl} download className="inline-flex items-center gap-2">
                <Download className="w-4 h-4" />
                Descarregar CV
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={cvViewUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Veure en línia
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
