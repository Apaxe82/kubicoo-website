'use client';

import { useState, useEffect } from 'react';
import { supabase, testConnection } from '../../lib/supabase';
import { CheckCircle, XCircle, Database } from 'lucide-react';
import Link from 'next/link';

export default function TestSupabasePage() {
  const [status, setStatus] = useState({
    connection: null,
    auth: null,
    storage: null,
    database: null
  });
  const [loading, setLoading] = useState(true);
  const [testResults, setTestResults] = useState([]);

  useEffect(() => {
    runTests();
  }, []);

  async function runTests() {
    setLoading(true);
    const results = [];

    try {
      const connResult = await testConnection();
      results.push({
        name: 'Database Connection',
        status: connResult.success ? 'success' : 'failed',
        message: connResult.message
      });
      setStatus(prev => ({ ...prev, connection: connResult.success }));
    } catch (error) {
      results.push({
        name: 'Database Connection',
        status: 'failed',
        message: error.message
      });
    }

    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) throw error;
      results.push({
        name: 'Authentication Service',
        status: 'success',
        message: 'Auth working'
      });
      setStatus(prev => ({ ...prev, auth: true }));
    } catch (error) {
      results.push({
        name: 'Authentication Service',
        status: 'failed',
        message: error.message
      });
    }

    try {
      const { data, error } = await supabase.storage.listBuckets();
      if (error) throw error;
      const hasBucket = data.some(b => b.name === 'property-images');
      results.push({
        name: 'Storage Bucket',
        status: hasBucket ? 'success' : 'warning',
        message: hasBucket ? 'Bucket found' : 'Create "property-images" bucket'
      });
      setStatus(prev => ({ ...prev, storage: hasBucket }));
    } catch (error) {
      results.push({
        name: 'Storage Bucket',
        status: 'failed',
        message: error.message
      });
    }

    try {
      const tables = ['users', 'properties', 'bookings'];
      const checks = await Promise.all(
        tables.map(table => 
          supabase.from(table).select('count', { count: 'exact', head: true })
        )
      );
      
      const allExist = checks.every(({ error }) => !error);
      results.push({
        name: 'Database Tables',
        status: allExist ? 'success' : 'warning',
        message: allExist ? 'All tables exist' : 'Run schema SQL first'
      });
      setStatus(prev => ({ ...prev, database: allExist }));
    } catch (error) {
      results.push({
        name: 'Database Tables',
        status: 'failed',
        message: error.message
      });
    }

    setTestResults(results);
    setLoading(false);
  }

  const getIcon = (status) => {
    if (status === 'success') return <CheckCircle className="w-6 h-6 text-green-500" />;
    if (status === 'failed') return <XCircle className="w-6 h-6 text-red-500" />;
    if (status === 'warning') return <XCircle className="w-6 h-6 text-yellow-500" />;
    return <div className="w-6 h-6 border-2 border-gray-300 border-t-[#06B6D4] rounded-full animate-spin" />;
  };

  const allPassed = Object.values(status).every(s => s === true);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Supabase Connection Test</h1>
          <p className="text-gray-600 mb-8">Testing Kubicoo database connection</p>

          <div className={`p-6 rounded-xl mb-8 ${allPassed ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'}`}>
            <div className="flex items-center gap-4">
              {allPassed ? (
                <CheckCircle className="w-12 h-12 text-green-500" />
              ) : (
                <Database className="w-12 h-12 text-gray-400" />
              )}
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {allPassed ? 'All Systems Operational ✅' : 'Running Tests...'}
                </h2>
                <p className="text-gray-600">
                  {allPassed ? 'Supabase is ready!' : 'Please wait...'}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {testResults.map((result, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center gap-4">
                  {getIcon(result.status)}
                  <div>
                    <h3 className="font-semibold text-gray-900">{result.name}</h3>
                    {result.message && <p className="text-sm text-gray-600">{result.message}</p>}
                  </div>
                </div>
                <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                  result.status === 'success' ? 'bg-green-100 text-green-700' :
                  result.status === 'failed' ? 'bg-red-100 text-red-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {result.status}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-4">Environment Variables</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Supabase URL:</span>
                <span className="font-mono text-gray-900">
                  {process.env.NEXT_PUBLIC_SUPABASE_URL ? '✅ Set' : '❌ Missing'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Anon Key:</span>
                <span className="font-mono text-gray-900">
                  {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? '✅ Set' : '❌ Missing'}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <button
              onClick={runTests}
              disabled={loading}
              className="flex-1 bg-[#06B6D4] text-white py-3 px-6 rounded-lg font-bold hover:bg-opacity-90 disabled:opacity-50 transition-all"
            >
              {loading ? 'Testing...' : 'Run Tests Again'}
            </button>
            <Link
              href="/"
              className="flex-1 bg-gray-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-opacity-90 transition-all text-center flex items-center justify-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
