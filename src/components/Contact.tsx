import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    console.log('Form submitted:', formData);
    alert('Gràcies pel teu missatge! Em posaré en contacte amb tu aviat.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4">Contacte</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interessat/da en col·laborar o adquirir una peça? M'agradaria escoltar-te.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="mb-6">Informació de contacte</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-gray-900 mb-1">Correu electrònic</p>
                  <a href="mailto:meldecatem@gmail.com" className="text-gray-600 hover:text-gray-900">
                    meldecatem@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-gray-900 mb-1">Telèfon</p>
                  <a href="tel:+34620432776" className="text-gray-600 hover:text-gray-900">
                    620 432 776
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <p className="text-gray-900 mb-1">Ubicació</p>
                  <p className="text-gray-600">
                    Ontinyent (València)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600">
                Disponible per a encàrrecs, col·laboracions i exposicions. 
                El temps de resposta habitual és de 48 hores.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Nom</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="El teu nom"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Correu electrònic</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="el-teu@correu.com"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">Missatge</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Explica'm sobre el teu projecte o consulta..."
                  rows={6}
                  className="mt-2"
                />
              </div>

              <Button type="submit" className="w-full">
                Enviar missatge
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
