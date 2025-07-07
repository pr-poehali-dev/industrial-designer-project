import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-space-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-space-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-semibold text-space-800">
              Design Studio
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-space-600 hover:text-space-800 transition-colors"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-space-600 hover:text-space-800 transition-colors"
              >
                Кейсы
              </a>
              <a
                href="#"
                className="text-space-600 hover:text-space-800 transition-colors"
              >
                Экспертиза
              </a>
              <a
                href="#"
                className="text-space-600 hover:text-space-800 transition-colors"
              >
                Команда
              </a>
              <a
                href="#"
                className="text-space-600 hover:text-space-800 transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button variant="outline" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-space-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-space-800 mb-6 tracking-tight">
              Промышленный
              <span className="block text-space-600">дизайн</span>
            </h1>
            <p className="text-xl text-space-500 mb-8 max-w-2xl mx-auto leading-relaxed">
              Создаем продукты, которые меняют мир. От концепции до производства
              — превращаем идеи в реальность.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-space-800 hover:bg-space-700 text-white px-8 py-4"
              >
                Посмотреть проекты
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4">
                Обсудить проект
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(29,29,31,0.1),transparent_70%)] pointer-events-none" />
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space-800 mb-4">
              Экспертиза
            </h2>
            <p className="text-xl text-space-500 max-w-2xl mx-auto">
              Полный цикл разработки продуктов для современного производства
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-space-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-space-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon name="Settings" size={24} className="text-space-600" />
                </div>
                <h3 className="text-xl font-semibold text-space-800 mb-4">
                  Разработка продуктов
                </h3>
                <p className="text-space-500 leading-relaxed">
                  От идеи до серийного производства. Создаем функциональные
                  решения для современной индустрии.
                </p>
              </CardContent>
            </Card>
            <Card className="border-space-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-space-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon name="Box" size={24} className="text-space-600" />
                </div>
                <h3 className="text-xl font-semibold text-space-800 mb-4">
                  3D-моделирование
                </h3>
                <p className="text-space-500 leading-relaxed">
                  Точное моделирование и прототипирование. Визуализация
                  концепций на всех этапах разработки.
                </p>
              </CardContent>
            </Card>
            <Card className="border-space-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-space-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon name="Car" size={24} className="text-space-600" />
                </div>
                <h3 className="text-xl font-semibold text-space-800 mb-4">
                  Автомобильный дизайн
                </h3>
                <p className="text-space-500 leading-relaxed">
                  Инновационные решения для автомобильной индустрии. Интерьеры,
                  экстерьеры, компоненты.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-space-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space-800 mb-4">Кейсы</h2>
            <p className="text-xl text-space-500 max-w-2xl mx-auto">
              Избранные проекты, которые демонстрируют наш подход к дизайну
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group overflow-hidden border-space-100 hover:shadow-xl transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/img/0683bd00-d89d-4bc6-aad1-eec655874eda.jpg"
                  alt="Automotive Dashboard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-space-800 mb-2">
                  Автомобильная панель
                </h3>
                <p className="text-space-500 text-sm">
                  Концепция интерьера премиум-класса
                </p>
              </CardContent>
            </Card>
            <Card className="group overflow-hidden border-space-100 hover:shadow-xl transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/img/ee3ea926-27bb-483a-bc70-814ca8a2dacd.jpg"
                  alt="Furniture Design"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-space-800 mb-2">
                  Мебельный дизайн
                </h3>
                <p className="text-space-500 text-sm">
                  Минималистичные формы и функциональность
                </p>
              </CardContent>
            </Card>
            <Card className="group overflow-hidden border-space-100 hover:shadow-xl transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/img/02678e7c-ec68-4673-a6fe-69e314279c60.jpg"
                  alt="3D Modeling"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-space-800 mb-2">
                  3D-прототипирование
                </h3>
                <p className="text-space-500 text-sm">
                  Точное моделирование и визуализация
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-space-800 mb-4">Команда</h2>
            <p className="text-xl text-space-500 max-w-2xl mx-auto">
              Профессионалы с многолетним опытом в промышленном дизайне
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-space-100">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-space-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Icon name="User" size={32} className="text-space-600" />
                </div>
                <h3 className="text-xl font-semibold text-space-800 mb-2">
                  Алексей Иванов
                </h3>
                <p className="text-space-500 mb-4">Ведущий дизайнер</p>
                <p className="text-sm text-space-400">
                  15 лет опыта в автомобильной индустрии
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-space-100">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-space-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Icon name="User" size={32} className="text-space-600" />
                </div>
                <h3 className="text-xl font-semibold text-space-800 mb-2">
                  Мария Петрова
                </h3>
                <p className="text-space-500 mb-4">3D-моделлер</p>
                <p className="text-sm text-space-400">
                  Специалист по техническому моделированию
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-space-100">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-space-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Icon name="User" size={32} className="text-space-600" />
                </div>
                <h3 className="text-xl font-semibold text-space-800 mb-2">
                  Дмитрий Сидоров
                </h3>
                <p className="text-space-500 mb-4">Инженер-конструктор</p>
                <p className="text-sm text-space-400">
                  Эксперт по промышленному производству
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-space-800 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-space-300 max-w-2xl mx-auto">
              Готовы обсудить ваш проект? Свяжитесь с нами
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Связаться с нами</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Icon name="Mail" size={20} className="text-space-400" />
                  <span className="text-space-200">hello@designstudio.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Phone" size={20} className="text-space-400" />
                  <span className="text-space-200">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="MapPin" size={20} className="text-space-400" />
                  <span className="text-space-200">
                    Москва, ул. Дизайнерская, 15
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Начать проект</h3>
              <Button
                size="lg"
                className="bg-white text-space-800 hover:bg-space-100 px-8 py-4"
              >
                Обсудить проект
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-space-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center">
            <p className="text-space-400">
              &copy; 2024 Design Studio. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
