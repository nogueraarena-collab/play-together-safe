import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Heart, Shield, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-sports.jpg";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-6 md:px-12 py-6 border-b border-border">
        <div className="bg-foreground text-background px-4 py-2 rounded font-bold text-sm">
          LOGO
        </div>
        <Button 
          onClick={() => navigate("/auth")}
          variant="outline"
          className="font-semibold"
        >
          ACCEDER
        </Button>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col">
        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center px-4 py-12 md:py-20">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
              ¡Haz amigos<br />practicando deportes!
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Conecta con personas que comparten tu pasión por el deporte.<br />
              De forma segura y confiable.
            </p>

            {/* CTA Button */}
            <div className="pt-6">
              <Button 
                onClick={() => navigate("/auth")}
                size="lg"
                className="text-lg px-16 py-7 h-auto font-bold"
              >
                ACCEDER
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full max-w-6xl mx-auto px-4 pb-12">
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-border shadow-2xl">
            <img 
              src={heroImage} 
              alt="Personas practicando deporte juntos"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3 text-center">
              <div className="w-14 h-14 bg-foreground text-background rounded-xl flex items-center justify-center mx-auto">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-foreground text-lg">Encuentra compañeros</h3>
              <p className="text-sm text-muted-foreground">
                Conecta con deportistas cerca de ti
              </p>
            </div>

            <div className="space-y-3 text-center">
              <div className="w-14 h-14 bg-foreground text-background rounded-xl flex items-center justify-center mx-auto">
                <Calendar className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-foreground text-lg">Organiza actividades</h3>
              <p className="text-sm text-muted-foreground">
                Planifica o únete espontáneamente
              </p>
            </div>

            <div className="space-y-3 text-center">
              <div className="w-14 h-14 bg-foreground text-background rounded-xl flex items-center justify-center mx-auto">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-foreground text-lg">Seguridad garantizada</h3>
              <p className="text-sm text-muted-foreground">
                Sistema de referencias y verificación
              </p>
            </div>

            <div className="space-y-3 text-center">
              <div className="w-14 h-14 bg-foreground text-background rounded-xl flex items-center justify-center mx-auto">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-foreground text-lg">Comunidad deportiva</h3>
              <p className="text-sm text-muted-foreground">
                Más que deporte, una red social
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-muted-foreground border-t">
        <p>© 2025 SportConnect. Conectando deportistas.</p>
      </footer>
    </div>
  );
};

export default Landing;
