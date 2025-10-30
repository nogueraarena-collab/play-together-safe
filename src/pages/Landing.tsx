import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Heart, Shield, Calendar } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="bg-foreground text-background px-6 py-3 rounded-lg font-bold text-xl">
              SportConnect
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Haz amigos<br />practicando deporte
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Conecta con personas que comparten tu pasión por el deporte. 
            De forma segura y confiable.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              onClick={() => navigate("/auth")}
              size="lg"
              className="text-lg px-12 py-6 h-auto font-semibold"
            >
              Acceder
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-12">
            <div className="space-y-3">
              <div className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center mx-auto">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground">Encuentra compañeros</h3>
              <p className="text-sm text-muted-foreground">
                Conecta con deportistas cerca de ti
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center mx-auto">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground">Organiza actividades</h3>
              <p className="text-sm text-muted-foreground">
                Planifica o únete espontáneamente
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center mx-auto">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground">Seguridad garantizada</h3>
              <p className="text-sm text-muted-foreground">
                Sistema de referencias y verificación
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground">Comunidad deportiva</h3>
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
