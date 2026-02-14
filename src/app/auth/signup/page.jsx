'use client';

// src/app/auth/signup/page.jsx
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/contexts/AuthContext';
import { Mail, Lock, User, Eye, EyeOff, Home, Users } from 'lucide-react';
import toast from 'react-hot-toast';

export default function SignupPage() {
  const router = useRouter();
  const { signup } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'client', // 'client' or 'landlord'
    acceptTerms: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (formData.password !== formData.confirmPassword) {
      toast.error('As senhas não coincidem');
      return;
    }

    if (formData.password.length < 6) {
      toast.error('A senha deve ter pelo menos 6 caracteres');
      return;
    }

    if (!formData.acceptTerms) {
      toast.error('Você deve aceitar os termos e condições');
      return;
    }

    setLoading(true);

    try {
      await signup(formData.email, formData.password, formData.displayName, formData.role);
      toast.success('Conta criada com sucesso!');
      
      // Redirect based on role
      if (formData.role === 'landlord') {
        router.push('/dashboard/properties/new');
      } else {
        router.push('/properties');
      }
    } catch (error) {
      console.error('Signup error:', error);
      
      if (error.code === 'auth/email-already-in-use') {
        toast.error('Este email já está em uso');
      } else if (error.code === 'auth/invalid-email') {
        toast.error('Email inválido');
      } else if (error.code === 'auth/weak-password') {
        toast.error('Senha muito fraca');
      } else {
        toast.error('Erro ao criar conta. Tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-kubicoo-navy via-kubicoo-dark to-gray-900 flex items-center justify-center p-4 py-12">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 mb-4">
            <Image
              src="/images/logo.png"
              alt="Kubicoo"
              width={60}
              height={60}
              className="w-15 h-15"
            />
            <div>
              <div className="text-3xl font-bold text-white">KUBICOO</div>
              <div className="text-xs text-kubicoo-cyan italic">Digital que abre portas</div>
            </div>
          </Link>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Criar conta</h1>
          <p className="text-gray-600 mb-8">Junte-se ao Kubicoo hoje mesmo</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Role Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Sou um:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: 'client' })}
                  className={`p-4 border-2 rounded-lg text-center transition-all ${
                    formData.role === 'client'
                      ? 'border-kubicoo-cyan bg-kubicoo-cyan/10'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Users className={`w-8 h-8 mx-auto mb-2 ${formData.role === 'client' ? 'text-kubicoo-cyan' : 'text-gray-400'}`} />
                  <div className="font-semibold text-gray-900">Inquilino</div>
                  <div className="text-xs text-gray-500 mt-1">Procuro imóvel</div>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: 'landlord' })}
                  className={`p-4 border-2 rounded-lg text-center transition-all ${
                    formData.role === 'landlord'
                      ? 'border-kubicoo-cyan bg-kubicoo-cyan/10'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Home className={`w-8 h-8 mx-auto mb-2 ${formData.role === 'landlord' ? 'text-kubicoo-cyan' : 'text-gray-400'}`} />
                  <div className="font-semibold text-gray-900">Proprietário</div>
                  <div className="text-xs text-gray-500 mt-1">Tenho imóveis</div>
                </button>
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nome completo
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  required
                  value={formData.displayName}
                  onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-kubicoo-cyan focus:outline-none transition-colors"
                  placeholder="João Silva"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-kubicoo-cyan focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-12 py-3 border-2 border-gray-200 rounded-lg focus:border-kubicoo-cyan focus:outline-none transition-colors"
                  placeholder="Mínimo 6 caracteres"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Confirmar senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-kubicoo-cyan focus:outline-none transition-colors"
                  placeholder="Repita a senha"
                />
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start">
              <input
                type="checkbox"
                required
                checked={formData.acceptTerms}
                onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                className="w-4 h-4 text-kubicoo-cyan border-gray-300 rounded focus:ring-kubicoo-cyan mt-1"
              />
              <span className="ml-2 text-sm text-gray-600">
                Aceito os{' '}
                <Link href="/terms" className="text-kubicoo-cyan hover:underline">
                  Termos de Uso
                </Link>{' '}
                e{' '}
                <Link href="/privacy" className="text-kubicoo-cyan hover:underline">
                  Política de Privacidade
                </Link>
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-kubicoo-cyan text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                'Criar Conta Grátis'
              )}
            </button>
          </form>

          {/* Sign in link */}
          <p className="text-center text-gray-600 mt-6">
            Já tem uma conta?{' '}
            <Link href="/auth/login" className="text-kubicoo-cyan font-semibold hover:underline">
              Entrar
            </Link>
          </p>
        </div>

        {/* Back to home */}
        <div className="text-center mt-6">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
            ← Voltar para início
          </Link>
        </div>
      </div>
    </div>
  );
}
